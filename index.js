module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    "plugin:@typescript-eslint/recommended",
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    // 'import',
    // '@typescript-eslint'
  ],
  env: {
    browser: true,
    node: true
  },
  rules: {}
}