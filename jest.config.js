module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.test.ts'],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  moduleNameMapper: {
      '^@/test/(.*)': '<rootDir>/test/$1',
      '^@/(.*)': '<rootDir>/src/$1',
  }
}
