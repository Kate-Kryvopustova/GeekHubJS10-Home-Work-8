module.exports = {
  env: {
    "browser": true,
    "es2021": true,
    node: true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    'react/no-access-state-in-setstate': 0,
    'react/prefer-stateless-function': 1,
    'react/jsx-filename-extension': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/jsx-curly-spacing': ['error', 'always'],
    'jsx-quotes': ['error', 'prefer-single'],
  }
};
