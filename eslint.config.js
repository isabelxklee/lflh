import js from '@eslint/js';
import eslintRec from 'eslint-plugin-prettier/recommended';

export default [
  js.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn'
    }
  },
  eslintRec
];
