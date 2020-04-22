module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  rules: {
    "import/no-unresolved": "off",
    "react/destructuring-assignment": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": 0,
    "@typescript-eslint/no-unused-vars": "off",
  }
};