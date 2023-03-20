module.exports = {
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  plugins: ["vue"],
  rules: {
    "vue/multi-word-component-names": "off",
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    amd: true,
    node: true,
  },
};
