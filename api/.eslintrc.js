module.exports = {
  env: {
    es2016: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:qtypescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parseOptions: {
    ecmaVersion: 'es2016',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
}
