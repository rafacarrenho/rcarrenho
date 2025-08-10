// eslint.config.mjs (versão mínima + Next)
export default [
  { ignores: ["node_modules", ".next", "out", "src/gql"] },
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: (await import("@typescript-eslint/parser")).default
    },
    plugins: {
      "@typescript-eslint": (await import("@typescript-eslint/eslint-plugin"))
        .default,
      "@next/next": (await import("@next/eslint-plugin-next")).default
    },
    rules: {
      ...(await import("@next/eslint-plugin-next")).default.configs[
        "core-web-vitals"
      ].rules,
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ]
    }
  }
]
