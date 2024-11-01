export default {
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testEnvironment: 'node',
    transformIgnorePatterns: ['/node_modules/'],
  };
  