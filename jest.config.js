/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/test/**/*.test.ts"],
  moduleFileExtensions: ["js", "ts", "json", "node"],
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
};
