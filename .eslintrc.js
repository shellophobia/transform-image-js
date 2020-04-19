module.exports = {
  parser: "babel-eslint",
  env: {
    node: true,
    browser: true,
    es6: true,
    mocha: true,
    jest: true,
  },
  extends: [
    "airbnb",
    "plugin:flowtype/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  globals: {
    document: true,
    window: true,
  },
  plugins: ["flowtype", "import", "prettier"],
  rules: {
    "global-require": 0,
    "import/extensions": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "react/jsx-indent": 0,
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all",
      },
    ],
    "no-unused-vars": [2, { args: "none" }],
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
};
