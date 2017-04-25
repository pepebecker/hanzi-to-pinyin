'use strict'

const findHanzi = require('find-hanzi')

const convert = (text) => new Promise((yay, nay) => {
	findHanzi(text, {multiple: true}).then((data) => {
		const result = data.map((item) => item.pinyin)
		yay(result.join(' '))
	}, (error) => nay('hanzi-to-pinyin -> ' + error))
})

module.exports = convert
