const { rootDir } = require('./jest-common');

module.exports = {
  rootDir,
  runner: 'jest-runner-sasslint',
  displayName: 'lint:scss',
  testMatch: ['<rootDir>/src/**/*.scss'],
  moduleFileExtensions: ['scss']
};
