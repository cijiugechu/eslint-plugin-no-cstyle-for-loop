import noForLoop from './rule'

module.exports = {
  rules: {
    noForLoop: noForLoop,
  },
  configs: {
    all: {
      plugins: ['no-cstyle-for-loop'],
      rules: {
        'no-cstyle-for-loop': 'error',
      },
    },
  },
}