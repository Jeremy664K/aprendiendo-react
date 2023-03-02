module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier", "plugin:@typescript-eslint/recommended"],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json"
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        indent: ["warn", 4],
        "linebreak-style": "off",
        quotes: ["warn", "double"],
        semi: ["warn", "always"],
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off"
    }
};
