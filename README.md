# eslint-plugin-no-cstyle-for-loop

An eslint plugin that does not allow c-style for loops.

## ❌ Incorrect
```javascript
for(let i = 0; i < 10; i++) {
  console.log(i);
}
```

## ✅ Correct
```javascript
for(let i of [1, 2, 3]) {
  console.log(i);
}
```

## Installation

```shell
npm install --save-dev eslint-plugin-no-cstyle-for-loop
```

## Usage

```javascript
// .eslintrc.js
{
  "plugins": ["no-cstyle-for-loop"],
  "rules": {
    "no-cstyle-for-loop/noForLoop": "error"
  }
}
```