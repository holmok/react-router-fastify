const { ignores } = require('eslint-config-love')

module.exports = [
  {
    ...require('eslint-config-love'),
    ...require('eslint-config-prettier'),
    files: ['**/*.js', '**/*.ts'],
    ignores: ['node_modules/', 'dist/', 'build/', '.react-router']
  }
]
