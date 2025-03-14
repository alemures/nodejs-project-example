const globals = require('globals');
const pluginJs = require('@eslint/js');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs', globals: globals.node },
  },
  { files: ['test/**/*.js'], languageOptions: { globals: globals.jest } },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
];
