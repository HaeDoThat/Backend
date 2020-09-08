const isRegisteredEmail = require('./isRegisterdEmail');
const { createHash } = require('./createHash');
const compareDataAndHash = require('./compareDataAndHash');
const isName = require('./isName');
const isPassword = require('./isPassword');

module.exports = {
  isRegisteredEmail,
  compareDataAndHash,
  createHash,
  isName,
  isPassword
};