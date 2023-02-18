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
        indent: "off",
        "linebreak-style": "off",
        quotes: ["warn", "double"],
        semi: ["warn", "always"],
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off"
    }
};
