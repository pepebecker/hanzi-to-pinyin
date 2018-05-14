'use strict'

const getTokens = require('hanzi-tokenizer')

const processToken = (token, numbered, segmented) => {
	if (numbered) {
		if (segmented) {
			return Object.keys(token.definitions).map(v => v.replace(/\s/, ''))
		} else {
			return Object.keys(token.definitions)
		}
	} else {
		if (segmented) {
			return Object.values(token.definitions).map(v => v.pinyin.replace(/\s/, ''))
		} else {
			return Object.values(token.definitions).map(v => v.pinyin)
		}
	}
}

const convert = async (text, opts = {}) => {
	const tokens = await getTokens(text, Object.assign(opts, { spaces: true }))
	const list = []
	for (let i = 0; i < tokens.length; i++) {
		if (typeof tokens[i] === 'string') {
			if (typeof list[list.length - 1] === 'string') {
				list[list.length - 1] += tokens[i]
			} else {
				list.push(tokens[i])
			}
		} else {
			if (Object.keys(tokens[i].definitions).length === 1) {
				if (typeof list[list.length - 1] === 'string') {
					list[list.length - 1] += processToken(tokens[i], opts.numbered, opts.segmented)[0]
				} else {
					list.push(processToken(tokens[i], opts.numbered, opts.segmented)[0])
				}
			} else {
				list.push(processToken(tokens[i], opts.numbered, opts.segmented))
			}
		}
	}
	return list
}

module.exports = convert
module.exports.init = getTokens.init
