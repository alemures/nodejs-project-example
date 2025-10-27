import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'module', globals: globals.node },
  },
  { files: ['test/**/*.js'], languageOptions: { globals: globals.jest } },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
];
