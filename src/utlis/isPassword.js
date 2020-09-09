const { badRequest, invalidPassword } = require('../error');

function isPassword(password) {
  const checkRegExp = /[0-9|A-Z|a-z|\{|\}|\[|\]|\/|?|.|,|;|:|\||\)|\_|*|~|`|!|^|\-|+|<|>|@|\#|$|%|&|\\|\=|\(|\'|\"|]/g;
  if (!password) {
    throw badRequest;
  }
  if (password.length < 8 || password.length > 20) {
    throw invalidPassword;
  }
  if (!checkRegExp.test(password)) {
    throw invalidPassword;
  }
  return true;
}

module.exports = isPassword;