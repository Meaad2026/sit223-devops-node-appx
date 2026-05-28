const js = require('@eslint/js');

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'commonjs',
            globals: {
                require: 'readonly',
                module: 'readonly',
                console: 'readonly',
                describe: 'readonly',
                it: 'readonly',
                expect: 'readonly'
            }
        }
    }
];
