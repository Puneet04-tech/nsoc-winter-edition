import next from "@next/eslint-plugin-next";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import unused from "eslint-plugin-unused-imports";

const eslintConfig = [
  {
    files: ["**/*.{js,cjs,mjs,ts,tsx}"],
    plugins: { next, react, "react-hooks": reactHooks, "unused-imports": unused },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...next.config.globals },
    },
    rules: {
      ...next.config.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        { vars: "all", args: "after-used", ignoreRestSiblings: true },
      ],
      "react/jsx-uses-react": "error",
      "react/react-in-jsx-scope": "error",
      "@next/next/no-img-element": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "no-console": ["error", { allow: ["warn", "error"] }],
    },
  },
];

export default eslintConfig;
