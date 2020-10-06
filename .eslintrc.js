module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'array-bracket-newline': ['warn', 'consistent'],
    'array-bracket-spacing': ['warn'],
    'array-element-newline': ['warn', 'consistent'],
    'block-spacing': ['warn'],
    'brace-style': ['warn'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['warn'],
    'comma-style': ['warn'],
    'eol-last': ['warn'],
    'func-call-spacing': ['warn'],
    'key-spacing': ['warn'],
    'keyword-spacing': ['warn'],
    'no-console': 'error',
    'no-lonely-if': ['warn'],
    'no-multi-spaces': ['warn', { ignoreEOLComments: true }],
    'no-trailing-spaces': ['warn'],
    'no-whitespace-before-property': ['warn'],
    'object-curly-spacing': ['warn', 'always'],
    'quotes': ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'semi': ['error', 'always'],
    'space-before-blocks': ['warn'],
    'space-infix-ops': ['warn'],
    // ES6
    'arrow-spacing': ['warn'],
    'no-var': ['error'],
    'rest-spread-spacing': ['warn'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }]
      }
    }
  ]
};
