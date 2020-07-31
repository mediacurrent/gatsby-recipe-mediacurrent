module.exports = {
  ...require('./test/jest-common'),
  collectCoverageFrom: ['**/src/**/*.js', '!**/src/**/*.stories.js'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/',
    '/static/',
    '/public/'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
    '/public/',
    '/.cache/',
    '/__mocks__/',
    '/static/'
  ],
  projects: [
    './test/jest.scss.js',
    './test/jest.lint.js',
    './test/jest.client.js',
    './test/jest.storybook.js'
  ]
};
