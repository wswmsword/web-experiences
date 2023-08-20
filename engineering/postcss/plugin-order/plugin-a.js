
module.exports = (options = {}) => {

  return {
    postcssPlugin: "plugin-a",
    prepare(result) {

      return {
        Once(_, postcss) {
          console.log("a-Once");
        },
        Rule(rule, postcss) {
          console.log("a-Rule");
        },
        Declaration(decl, postcss) {
          console.log("a-Decl");
        },
        RuleExit(rule, postcss) {
          console.log("a-RuleExit");
        },
        OnceExit(css, postcss) {
          console.log("a-OnceExit");
        },
      };
    },
  };
};

module.exports.postcss = true;
