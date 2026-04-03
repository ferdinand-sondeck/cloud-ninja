// eslint.config.js
module.exports = [
  {
    ignores: ['node_modules/', 'public/', 'dist/'],
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs'
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      indent: ['error', 2],
      'no-unused-vars': 'warn'
    }
  }
];
