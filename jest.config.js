module.exports = {
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/server.js'
  ],
  coverageReporters: ['text', 'lcov', 'clover'],
  testMatch: ['**/tests/**/*.test.js']
};
