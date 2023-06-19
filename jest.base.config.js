module.exports = {
    restoreMocks: true,
    collectCoverageFrom: [
        '**/*.tsx',
        '!**/node_modules/**',
        '!**/__*__/**', // ignore tests folders
    ],
    coverageReporters: ['json-summary', 'lcov'],
};
