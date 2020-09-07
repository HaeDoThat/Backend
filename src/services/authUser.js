const { createHash } = require('../utlis');

class AuthUser {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async singUp(name, email, password) {
    try {
     const HASH = createHash(password);

     this.userModel.create({
      name: name,
      email: email,
      password: password
     });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthUser;