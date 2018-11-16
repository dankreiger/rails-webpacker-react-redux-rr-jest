module.exports = {
  roots: [
    "app/javascript/components"
  ],
  moduleDirectories: [
    "node_modules",
    "app/javascript"
  ],
  setupFiles: ['<rootDir>/app/javascript/setupTests.js'],
  transformIgnorePatterns: ["<rootDir>/vendor/", "<rootDir>/node_modules/"]
}