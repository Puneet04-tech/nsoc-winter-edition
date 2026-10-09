import next from "@next/eslint-plugin-next";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import unused from "eslint-plugin-unused-imports";
import typescriptESLint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

const eslintConfig = [
  {
    files: ["**/*.{js,cjs,mjs,ts,tsx}"],
    plugins: {
      "@next/next": next,
      react,
      "react-hooks": reactHooks,
      "unused-imports": unused,
      "@typescript-eslint": typescriptESLint,
    },
    languageOptions: {
      parser: parser,
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        ...next.configs.recommended.globals,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...next.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...typescriptESLint.configs.recommended.rules,
      "unused-imports/no-unused-imports": "off",
      "unused-imports/no-unused-vars": "off",
      "react/jsx-uses-react": "error",
      "react/react-in-jsx-scope": "off", // Turn off because of new JSX transform
      "@next/next/no-img-element": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "no-console": ["error", { allow: ["warn", "error"] }],
      "@typescript-eslint/no-unused-vars": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default eslintConfig;