/** @type {import('jest').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: "jsdom", // مخصوص تست ری‌اکت
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/test/jest/__mocks__/styleMock.js",
  },
};
