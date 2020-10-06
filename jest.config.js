// eslint-disable-next-line no-undef
module.exports = {
  globals: {
    'ts-jest': {
      babel: true,
      tsConfig: 'tsconfig.json',
    }
  },
  collectCoverageFrom: [
    'src/**/*.ts'
  ],
  moduleFileExtensions: [ 'js', 'ts' ],
  testPathIgnorePatterns: [ '/node_modules/' ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts)$',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  verbose: true
};
