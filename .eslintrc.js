module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es6: true,
    },
    extends: 'eslint:recommended',
    rules: {
        indent: ['error', 2],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-console': 'off',
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'no-extra-semi': 'off',
    },
};
