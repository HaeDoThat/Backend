const assert = require('assert');
const isRegisteredEmail = require('../utlis/isRegisterdEmail');
const { User } = require('../repositories/index');

describe('# sign up test', () => {
  describe('check email for already use it', async () => {
    const email = 'test4@test.com';
    const result = await User.count({
      where: { email: email }
    });
    const result2 = await isRegisteredEmail(User, email);
    console.log(result, result2);
  });
});
