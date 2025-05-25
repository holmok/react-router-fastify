import love from 'eslint-config-love'
import prettier from 'eslint-config-prettier'

export default [
  {
    ...love,
    ...prettier,
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['node_modules/**/*', 'dist/**/*', 'build/**/*', '.react-router']
  }
]
