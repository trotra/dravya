module.exports = {
  moduleDirectories: ['node_modules', 'test-utils', __dirname],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
};
