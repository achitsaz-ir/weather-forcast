import _import from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nextEslintPluginNext from '@next/eslint-plugin-next';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    {
        ignores: ['**/node_modules/*', '**/.next/*', 'eslint.*', '**/*.json', '**/*.css', '**/*.svg']
    },
    {
        plugins: {
            prettier,
            import: fixupPluginRules(_import),
            '@typescript-eslint': typescriptEslint,
            react,
            '@next/next': nextEslintPluginNext
        },

        languageOptions: {
            parser: tsParser,
            ecmaVersion: 8,
            sourceType: 'module',

            parserOptions: {
                createDefaultProgram: true,

                ecmaFeatures: {
                    jsx: true
                }
            }
        },

        settings: {
            react: {
                version: 'detect'
            },

            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx']
            },

            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx']
                }
            }
        },

        rules: {
            'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

            'react/jsx-filename-extension': [
                'error',
                {
                    extensions: ['.ts', '.tsx', '.jsx', '.js']
                }
            ],

            'no-param-reassign': 'error',
            'react/display-name': 'error',
            'react/no-array-index-key': 'warn',
            'no-console': 'error',
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': 'error',

            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: ['function', 'variable'],
                    format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
                    leadingUnderscore: 'allow',
                    trailingUnderscore: 'allow'
                }
            ],

            'prefer-destructuring': [
                'error',
                {
                    object: true,
                    array: false
                }
            ],

            'import/no-cycle': [
                'error',
                {
                    maxDepth: 1
                }
            ],

            'import/no-extraneous-dependencies': [
                'error',
                {
                    devDependencies: false,
                    optionalDependencies: false,
                    peerDependencies: false
                }
            ],

            'no-restricted-imports': 'error',

            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    vars: 'all',
                    args: 'none'
                }
            ]
        }
    }
];
