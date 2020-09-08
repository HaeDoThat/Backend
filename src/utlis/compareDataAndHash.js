const bcrypt = require('bcrypt');

async function compareDataAndHash(data, hash) {
    return await bcrypt.compare(data, hash);
}

module.exports = compareDataAndHash;