const express = require('express');

const { User } = require('../repositories');
const AuthUser = require('../services/authUser');
const authUser = new AuthUser(User);

const { isEmail, isName, isPassword } = require('./middleware');
const { isRegisteredEmail, createHash } = require('../utlis');

const router = express.Router();

// login 되어 있지 않은지 확인하는 middlewrae 필요
// 각 입력 형식이 적절한지 확인 필요
router.post('/', isEmail, isName, isPassword, async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    if (isRegisteredEmail(User, email)) {
      res.status(409).json({
        message: "이미 사용 중인 email입니다."
      });
    }

    await authUser.signUp(name, email, password);

    res.status(201).send();
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/auth', isEmail, isPassword, async (req, res, next) => {
  const { email, password } = req.body;

  let access_token;
  try {
    access_token = await authUser.signIn(email, password);
  }
  catch (e) {
    res.status(400).send({
      errorCode: 400,
      message: '로그인 실패'
    });
  }

  res.send({
    "access_token": access_token,
    "message": "로그인에 성공하였습니다."
  });

});


module.exports = router;