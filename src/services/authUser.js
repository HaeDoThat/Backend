const { createHash } = require('../utlis');

class AuthUser {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async singUp(name, email, password) {
    try {
     const HASH = await createHash(password);

     await this.userModel.create({
      name: name,
      email: email,
      password: HASH
     });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthUser;