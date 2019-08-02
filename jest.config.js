module.exports = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  moduleFileExtensions: ['vue', 'js', 'jsx', 'json', 'node'],
  snapshotSerializers: ["<rootDir>/node_modules/jest-serializer-vue"],
  transform: {
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    '^.+\\.jsx?$': 'babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@storybook/.*\\.vue$|storybook-addon-vue-info))'
  ],
  setupFiles: ['<rootDir>/.jest/register-context.js']
};
