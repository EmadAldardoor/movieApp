module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@react-native-community',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    quotes: 'off',
    '@typescript-eslint/quotes': [
      'off',
      'double',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'array-element-newline': [
      'off',
      {
        ArrayExpression: 'consistent',
        ArrayPattern: {minItems: 3},
      },
    ],
    'no-var': 'off',
    'no-eval': 'off',
    'no-shadow': 'off',
    'dot-notation': 'off',
    'prefer-const': 'off',
    'no-self-assign': 'off',
    'no-prototype-builtins': 'off',
    'no-extra-boolean-cast': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off', // Checks effect dependencies
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    'prettier/prettier': ['warn', {singleQuote: false}, {tabWidth: 4}],
    eqeqeq: 'off',
  },
};
