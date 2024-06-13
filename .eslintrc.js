module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "airbnb", "prettier"],
  parserOptions: {
    sourseType: "module",
  },
  plugins: ["jest"],
  rules: {
    "linebreak-style": "off",
    "max-len": ["error", { ignoreComments: true }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-shadow": "off",
  },
};
