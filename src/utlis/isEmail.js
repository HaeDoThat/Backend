const validator = require('validator');
const { badRequest, invalidEmail } = require('../error');

function isEmail(email) {
  if (!email) {
    throw badRequest;
  }
  if (!validator.isEmail(email)) {
    throw invalidEmail;
  }
  
  return true;
}

module.exports = isEmail;