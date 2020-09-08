const isRegisteredEmail = require('./isRegisterdEmail');
const { createHash } = require('./createHash');
const isName = require('./isName');
const isPassword = require('./isPassword');
const isEmail = require('./isEmail');

module.exports = {
  isRegisteredEmail,
  createHash,
  isName,
  isPassword,
  isEmail
};