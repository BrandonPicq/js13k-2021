module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['google'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['src/shaders/'],
  rules: {
    'require-jsdoc': 'off',
    'camelcase': 'off',
    'max-len': ['error', {code: 120}],
    'no-unused-vars': ['error', {varsIgnorePattern: '^_'}],
  },
};
