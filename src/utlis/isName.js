const { badRequest, invalidName } = require('../error');

function isName(name) {
  const checkRegExp = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z|A-Z|0-9||_]|-$/;

  if (!name) {
    throw badRequest;
  }
  if (name.length < 2 || name.length > 10) {
    throw invalidName;
  }
  if (!checkRegExp.test(name)) {
    throw invalidName;
  }
  return true;
}

module.exports = isName;