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
			list.push(text[index])
		}
		index++
	}
	return list
}

const convert = async (text, numbered) => {
	const tokens = await getTokens(text)
	return tokens.reduce((list, token) => {
		if (typeof token === 'string') {
			if (typeof list[list.length - 1] === 'string') {
				list[list.length - 1] += token
			} else {
				list.push(token)
			}
		} else {
			let pinyins = Object.keys(token.data)
			if (numbered) {
				list.push(pinyins)
			} else {
				list.push(pinyins.map(pinyin => token.data[pinyin].mandarin))
			}
		}
		return list
	}, [])
}

module.exports = convert
