# Hanzi to Pinyin

[![Travis Build Status](https://travis-ci.org/pepebecker/hanzi-to-pinyin.svg)](https://travis-ci.org/pepebecker/hanzi-to-pinyin)
[![Coverage Status](https://coveralls.io/repos/github/pepebecker/hanzi-to-pinyin/badge.svg)](https://coveralls.io/github/pepebecker/hanzi-to-pinyin)
[![dependency status](https://img.shields.io/david/pepebecker/hanzi-to-pinyin.svg)](https://david-dm.org/pepebecker/hanzi-to-pinyin)
[![dev dependency status](https://img.shields.io/david/dev/pepebecker/hanzi-to-pinyin.svg)](https://david-dm.org/pepebecker/hanzi-to-pinyin#info=devDependencies)
[![MIT-licensed](https://img.shields.io/github/license/pepebecker/hanzi-to-pinyin.svg)](https://opensource.org/licenses/MIT)
[![chat on gitter](https://badges.gitter.im/pepebecker.svg)](https://gitter.im/pepebecker)

## Install

```shell
npm install hanzi-to-pinyin@pepebecker/hanzi-to-pinyin
```

## Usage

```js
const convert = require('hanzi-to-pinyin')
convert('我的猫喜欢喝牛奶')
.then(console.log) // wǒ de māo xǐ huān hē niú nǎi
.catch(console.error)
```

## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/pepebecker/hanzi-to-pinyin/issues).