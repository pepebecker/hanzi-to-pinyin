# Hanzi to Pinyin

[![Greenkeeper badge](https://badges.greenkeeper.io/pepebecker/hanzi-to-pinyin.svg)](https://greenkeeper.io/)

[![npm version](https://img.shields.io/npm/v/hanzi-to-pinyin.svg)](https://www.npmjs.com/package/hanzi-to-pinyin)
[![Travis Build Status](https://travis-ci.org/pepebecker/hanzi-to-pinyin.svg)](https://travis-ci.org/pepebecker/hanzi-to-pinyin)
[![Coverage Status](https://coveralls.io/repos/github/pepebecker/hanzi-to-pinyin/badge.svg)](https://coveralls.io/github/pepebecker/hanzi-to-pinyin)
[![dependency status](https://img.shields.io/david/pepebecker/hanzi-to-pinyin.svg)](https://david-dm.org/pepebecker/hanzi-to-pinyin)
[![dev dependency status](https://img.shields.io/david/dev/pepebecker/hanzi-to-pinyin.svg)](https://david-dm.org/pepebecker/hanzi-to-pinyin#info=devDependencies)
[![MIT-licensed](https://img.shields.io/github/license/pepebecker/hanzi-to-pinyin.svg)](https://opensource.org/licenses/MIT)
[![chat on gitter](https://badges.gitter.im/pepebecker.svg)](https://gitter.im/pepebecker)

## Install

```shell
npm install hanzi-to-pinyin
```

## Usage

```js
const convert = require('hanzi-to-pinyin')
convert('我的猫喜欢吃苹果')
.then(console.log) // [ ['wǒ'], ['de','dī','dí','dì'], ['māo'], ['xǐ huan'], ['chī'], ['píng guǒ'] ]
.catch(console.error)
```

## Related

- [`pinyin-utils`](https://github.com/pepebecker/pinyin-utils)
- [`pinyin-split`](https://github.com/pepebecker/pinyin-split)
- [`find-hanzi`](https://github.com/pepebecker/find-hanzi)
- [`hsk-words`](https://github.com/pepebecker/hsk-words)
- [`pinyin-or-hanzi`](https://github.com/pepebecker/pinyin-or-hanzi)
- [`pinyin-convert`](https://github.com/pepebecker/pinyin-convert)
- [`pinyin-rest`](https://github.com/pepebecker/pinyin-rest)
- [`pinyin-api`](https://github.com/pepebecker/pinyin-api)
- [`pinyin-bot-core`](https://github.com/pepebecker/pinyin-bot-core)
- [`pinyin-telegram`](https://github.com/pepebecker/pinyin-telegram)
- [`pinyin-messenger`](https://github.com/pepebecker/pinyin-messenger)

## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/pepebecker/hanzi-to-pinyin/issues).