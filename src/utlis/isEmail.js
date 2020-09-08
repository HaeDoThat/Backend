const validator = require('validator');

function isEmail(email) {
  return validator.isEmail(email);
}

module.exports = isEmail;