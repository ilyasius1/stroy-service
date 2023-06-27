module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: [
    'prettier',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@babel/eslint-parser',
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        singleQuote: true,
      },
    ],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
  },
};
