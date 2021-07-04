module.exports = {
  "plugins": [
      "@babel/plugin-proposal-optional-chaining"
  ],
  presets: [
    ["@babel/preset-env", {
      targets: {electron: process.versions.electron || process.env.ELECTRON_VERSION}
    }]
  ]
}
