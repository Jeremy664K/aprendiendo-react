module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        "linebreak-style": "off",
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off"
    }
};
