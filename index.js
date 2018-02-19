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
			const entry = mdbg.get(word)
			if (entry) {
				index += count - 1
				entry.word = word
				list.push(entry)
				wordFound = true
				break
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
			let pinyins = Object.keys(token.data)
			if (numbered) {
				return pinyins
			} else {
				return pinyins.map(pinyin => token.data[pinyin].mandarin)
			}
		}
	})
}

module.exports = convert
