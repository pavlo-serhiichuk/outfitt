// import path from 'path'
/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */

const config = {

  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleDirectories: ['node_modules'],
  modulePaths: ['<rootDir>src'],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  rootDir: '../../',
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  // globals: {
  //   __IS_DEV__: true,
  //   __API__: true,
  //   __PROJECT__: 'jest',
  // },
  // setupFilesAfterEnv: ['<rootDir>/config/test/setupTests.ts'],
  // moduleNameMapper: {
  //   '\\.s?css$': path.resolve(__dirname, 'styleMock.ts'),
  //   '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
  //   '\\.jpg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
  //   '\\.png': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
  //   axios: 'axios/dist/node/axios.cjs',
  //   '^@/(.*)$': '<rootDir>src/$1',
  // },

}

export default config
