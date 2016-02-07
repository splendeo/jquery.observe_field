module.exports = {
  rules: {
    indent: [ 2, 2 ],
    quotes: [ 2, "single" ],
    "linebreak-style": [ 2, "unix" ],
    semi: [ 2, "always" ],
  },
  env: {
    browser: true,
    jquery: true,
  },
  extends: "eslint:recommended",
};
