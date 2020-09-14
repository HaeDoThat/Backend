const jwt = require('jsonwebtoken');
const { TOKEN_SECRET } = require('../config')


class AccessTokenService {
    verify(token) {
        return jwt.verify(token, TOKEN_SECRET);
    }

    create(email) {
        return jwt.sign({ email: email }, TOKEN_SECRET, { expiresIn: '30d'});
    }

}


module.exports = AccessTokenService;
