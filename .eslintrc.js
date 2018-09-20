module.exports = {
  extends: 'airbnb-base',
  env: {
    node: true,
  },
  rules: {
    'semi': ['error', 'never'], // no unnecessary semi-colons
    'comma-dangle': ['error', 'always-multiline'], // disallow trailing commas in object literals
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }]
  },
}
