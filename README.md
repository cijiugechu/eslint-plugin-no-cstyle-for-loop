# eslint-plugin-no-cstyle-for-loop

An eslint plugin that does not allow c-style for loops.

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