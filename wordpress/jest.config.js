/**
 * Jest configuration for WordPress blocks testing
 */
const defaultConfig = require("@wordpress/scripts/config/jest-unit.config");

module.exports = {
  ...defaultConfig,
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],
  moduleNameMapper: {
    ...defaultConfig.moduleNameMapper,
    "^@ds-shared/(.*)$": "<rootDir>/shared/$1",
    "^@ds-agency/(.*)$": "<rootDir>/../src/components/$1",
  },
  collectCoverageFrom: [
    "shared/**/*.js",
    "blocks/**/*.js",
    "!**/__tests__/**",
    "!**/node_modules/**",
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};
