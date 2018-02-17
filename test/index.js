'use strict'

const convert = require('../index')

describe('Convert', () => {
	it('should convert characters to Pinyin', () => {
		return convert('我的猫喜欢喝牛奶').then(data => {
			data.map(l => {
				if (l.length > 1) {
					return '[' + l.join(',') + ']'
				} else {
					return l[0]
				}
			}).join(' ').should.equal('wǒ [de,dī,dí,dì] māo xǐ huan [hē,hè] niú nǎi')
		})
	})
})
