const validator = require('validator');
const { badRequest, invalidEmail } = require('../error');

function isEmail(email) {
  if(validator.isEmail(email)) {
    return true;
  } else if(!email) {
    throw badRequest;
  } else {  // !validator.isEmail(email)
    throw invalidEmail;
  }
}

module.exports = isEmail;