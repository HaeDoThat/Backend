const bcrypt = require('bcrypt');
const SALT_ROUND = 14;

async function createHash(password) {
  try {
    const HASH = await bcyrpt.hash(password, SALT_ROUND);
    return HASH;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  SALT_ROUND,
  createHash
};