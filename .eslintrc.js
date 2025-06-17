module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:security/recommended',
    'plugin:promise/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
    'security',
    'node',
    'promise'
  ],
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-unused-vars': ['warn'],
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'security/detect-object-injection': 'warn',
    'security/detect-non-literal-regexp': 'error',
    'security/detect-unsafe-regex': 'error',
    'node/no-deprecated-api': 'error',
    'node/no-missing-require': 'error',
    'promise/always-return': 'warn',
    'promise/no-callback-in-promise': 'warn',
  },
};
