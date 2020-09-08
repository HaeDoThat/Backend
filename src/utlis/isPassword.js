const { badRequest, invalidPassword } = require('../error');

function isPassword(password) {
  if (!password) {
    throw badRequest;
  }
  if (password.length < 8) {
    throw invalidPassword;
  }
  return true;
}

module.exports = isPassword;