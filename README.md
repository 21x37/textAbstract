# text-abstract

![npm](https://img.shields.io/npm/v/text-abstract.svg?style=popout)
![license](https://img.shields.io/github/license/21x37/textAbstract.svg)

Module to change veryLongStrings to veryLon...	

## Install
```
npm install text-abstract
```

## Usage
```js
const textAbstract = require("text-abstract");
```

```js

const veryLongString = hippopotomonstrosesquippedaliophobia;
const length = 5

const shortString = textAbstract(veryLongString, length);

console.log(shortString);

//-> hippo...
```
