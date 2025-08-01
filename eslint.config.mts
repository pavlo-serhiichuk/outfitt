import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import {defineConfig} from "eslint/config";
import {ConfigWithExtendsArray} from "@eslint/config-helpers";

export default defineConfig([
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {js},
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
        ...globals.browser,
        __API_URL__: 'readonly',
        DeepPartial: 'readonly'
      }
      },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/display-name': 'off',
      semi: ["error", "never"]
    }
  },
] as ConfigWithExtendsArray);
