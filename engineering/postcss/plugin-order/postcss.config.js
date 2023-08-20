module.exports = {
  plugins: [
    ["postcss-a", {
      viewportWidth: 750,
      maxDisplayWidth: 520,
      appSelector: "#root",
    }],
    ["postcss-b", {
      viewportWidth: 750,
      maxDisplayWidth: 520,
      appSelector: "#root",
    }]
  ],
};