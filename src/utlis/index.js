const isRegisteredEmail = require('./isRegisterdEmail');
const { createHash } = require('./createHash');
const compareDataAndHash = require('./compareDataAndHash');
const isName = require('./isName');
const isPassword = require('./isPassword');
const isEmail = require('./isEmail');

module.exports = {
  isRegisteredEmail,
  compareDataAndHash,
  createHash,
  isName,
  isPassword,
  isEmail
};