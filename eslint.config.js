import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        browser: "readonly",
        es2020: "readonly",
        node: "readonly",
        document: "readonly",
        window: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        setInterval: "readonly",
        Event: "readonly",
        Element: "readonly",
        HTMLElement: "readonly",
        HTMLAudioElement: "readonly",
        HTMLButtonElement: "readonly",
        HTMLVideoElement: "readonly",
        HTMLHeadingElement: "readonly",
        HTMLDivElement: "readonly",
        __dirname: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      prettier: prettier,
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...prettierConfig.rules,
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "prefer-const": "error",
      "no-var": "error",
      "no-console": "warn",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      "no-duplicate-imports": "error",
    },
  },
  {
    ignores: [
      "node_modules/",
      "dist/",
      "build/",
      "coverage/",
      "*.min.js",
      "*.bundle.js",
      "public/",
      ".github/",
      "*.config.js",
      "vite.config.js",
      "tailwind.config.js",
      "postcss.config.js",
    ],
  },
];
