module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended<% if (testing === "jest") { %>',
    'plugin:jest/recommended<% } %>',
    'prettier'
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 'off'
  }
}
