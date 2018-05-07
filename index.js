'use strict'

const mdbg = require('mdbg')

const getTokens = async text => {
	let list = []
	let index = 0
	while (index < text.length) {
		let word = text.substr(index)
		let count = word.length
		let wordFound = false
		while (count >= 0) {
			word = word.substr(0, count)
			try {
				const entry = await mdbg.get(word)
				index += count - 1
				entry.word = word
				list.push(entry)
				wordFound = true
				break
			} catch (err) {
				if (err.type !== 'NotFoundError') console.error(err)
			}
			count--
		}
		if (!wordFound) {
			if (typeof list[list.length - 1] === 'string') {
				list[list.length - 1] += text[index]
			} else {
				list.push(text[index])
			}
		}
		index++
	}
	return list
}

const convert = async (text, numbered) => {
	const tokens = await getTokens(text)
	return tokens.map(token => {
		if (typeof token === 'string') {
			return token
		} else {
			let pinyins = Object.keys(token.definitions)
			if (numbered) {
				return pinyins
			} else {
				return pinyins.map(pinyin => token.definitions[pinyin].pinyin)
			}
		}
	})
}

module.exports = convert
