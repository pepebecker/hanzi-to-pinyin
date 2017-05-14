'use strict'

const findHanzi = require('find-hanzi')
const so = require('so')

const convert = (text) => new Promise((yay, nay) => {
	so(function*() {
		let list = []
		const characters = text.split('')
		for (let hanzi of characters) {
			yield findHanzi(hanzi).then((data) => {
				const pinyin = data.map((item) => item.pinyin[0])[0]
				list.push(pinyin)
			}, (error) => nay('hanzi-to-pinyin -> ' + error))
		}
		if (list.length > 0) {
			yay(list.join(' '))
			return
		}
		nay('error')
	})()
})

module.exports = convert
