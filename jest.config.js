'use strict';

/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    testEnvironment: 'jsdom',
    collectCoverageFrom: ['./src/**/*.{ts,tsx}'],
    coveragePathIgnorePatterns: ['.d.ts', '.api.ts', 'index.ts', '.stories.tsx', './src/core/test/*'],
    setupFilesAfterEnv: ['<rootDir>/src/core/test/setup.ts'],
    transform: {
        '^.+\\.svg$': '<rootDir>/src/core/test/svgTransform.js',
        '^.+\\.m?[tj]sx?$': 'ts-jest',
    },
    transformIgnorePatterns: ['node_modules/(?!(.*\\.mjs$|react-merge-refs))'],
};

module.exports = config;
