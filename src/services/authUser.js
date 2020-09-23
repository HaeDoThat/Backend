const { createHash, compareDataAndHash } = require('../utlis');
const Excpetions = require('../error/ServiceExceptions');
const AccessTokenService = require('./accessToken');

const access_token_service = new AccessTokenService;

class AuthUser {
    constructor(userModel) {
        this.userModel = userModel;
    }

    async signUp(name, email, password) {
        try {
            const HASH = await createHash(password);

            await this.userModel.create({
                name: name,
                email: email,
                pw: HASH
            });
        } catch (error) {
            throw error;
        }
    }

    async signIn(email, password) {

        const user_entity = await this.userModel.findOne({
            where: {
                email: email
            }
        });

        if(user_entity == null) {
            throw new Excpetions.NotFoundDataException;
        }

        const stored_user = user_entity.dataValues;

        const flag_password_valid = await compareDataAndHash(password, stored_user.password);
        console.log(flag_password_valid);
        if (flag_password_valid == false) {
            throw new Excpetions.FailtoAuthenticationExcpetion;
        }

        return access_token_service.create(email);
    }

}

module.exports = AuthUser;