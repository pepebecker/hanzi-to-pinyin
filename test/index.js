'use strict'

const convert = require('../index')
const so = require('so')

so(function*(){
	yield convert('我的猫喜欢喝牛奶').then((data) => {
		console.log(data)
	}, console.log)

	yield convert('我的猫').then((data) => {
		console.log(data)
	}, console.log)
})()
