'use strict'

const findHanzi = require('find-hanzi')
const so = require('so')

const convert = (text) => new Promise((yay, nay) => {
	so(function*() {
		let list = []
		const characters = text.split('')
		for (let char of characters) {
			yield findHanzi(char).then((data) => {
				if (data.length > 0) {
					const pinyin = data.map((item) => item.pinyin[0])[0]
					list.push(pinyin)
				} else {
					list.push(char)
				}
			}, (error) => nay(error))
		}
		if (list.length > 0) {
			yay(list.join(' '))
			return
		}
		nay('error')
	})()
})

module.exports = convert
