module.exports = {
  env: {
    browser: true,
    es6: true,
    "jest/globals": true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "jest"],
  rules: {
    "object-curly-spacing": ["error", "always"],
    "arrow-spacing": ["error", { before: true, after: true }],
    "no-console": "warn",
    "react/prop-types": 0,
  },
};
