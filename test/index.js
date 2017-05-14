'use strict'

const convert = require('../index')

describe('Convert', () => {
	it('should convert characters to Pinyin', () => {
		return convert('我的猫喜欢喝牛奶').then((data) => {
			data.should.equal('wǒ de māo xǐ huān hē niú nǎi')
		}).catch(console.error)
	})
})
