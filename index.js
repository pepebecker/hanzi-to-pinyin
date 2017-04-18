'use strict'

const findHanzi = require('find-hanzi')
const so = require('so')

const convert = (text) => new Promise((yay, nay) => {
	so(function*(){
		let chars = text.split('')
		chars = chars.filter((char) => char != ' ')

		let list = []

		for (let char of chars) {
			yield findHanzi(char).then((data) => {
				list.push(data[0].pinyin)
			}, (error) => nay('hanzi-to-pinyin -> ' + error))
		}

		yay(list.join(' '))
	})()
})

module.exports = convert
