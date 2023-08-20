
module.exports = (options = {}) => {

  return {
    postcssPlugin: "plugin-b",
    prepare(result) {

      return {
        Once(_, postcss) {
          console.log("b-Once");
        },
        Rule(rule, postcss) {
          console.log("b-Rule");
        },
        Declaration(decl, postcss) {
          console.log("b-Decl");
        },
        RuleExit(rule, postcss) {
          console.log("b-RuleExit");
        },
        OnceExit(css, postcss) {
          console.log("b-OnceExit");
        },
      };
    },
  };
};

module.exports.postcss = true;
