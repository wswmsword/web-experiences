
module.exports = {
  env: {
    // This is the config we'll use to generate bundles for legacy browsers.
    legacy: {
      presets: [
        [
          "@babel/preset-env", {
            modules: false,
            useBuiltIns: "entry",
            // This should reasonably target older browsers.
            targets: "> 0.25%, last 2 versions, Firefox ESR"
          }
        ]
      ],
    },
    // This is the config we'll use to generate bundles for modern browsers.
    next: {
      presets: [
        [
          "@babel/preset-env", {
            modules: false,
            targets: {
              // This will target browsers which support ES modules.
              esmodules: true
            }
          }
        ]
      ],
    }
  }
};