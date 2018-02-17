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

const convert = async text => {
	const tokens = await getTokens(text)
	return tokens.map(token => {
		let keys = Object.keys(token.data)
		return keys.map(key => token.data[key].mandarin)
	})
}

module.exports = convert
