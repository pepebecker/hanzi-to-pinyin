'use strict'

const convert = require('../index')

describe('Convert', () => {
	it('should convert characters to marked pinyin', () => {
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

	it('should convert characters to numbered pinyin', () => {
		return convert('我的猫喜欢喝牛奶', { numbered: true }).then(data => {
			data.map(l => {
				if (l.length > 1) {
					return '[' + l.join(',') + ']'
				} else {
					return l[0]
				}
			}).join(' ').should.equal('wo3 [de5,di1,di2,di4] mao1 xi3 huan5 [he1,he4] niu2 nai3')
		})
	})
})
