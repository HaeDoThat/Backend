const express = require('express');

const { User } = require('../repositories');
const AuthUser = require('../services/authUser');
const authUser = new AuthUser(User);

const { isEmail, isName, isPassword } = require('./middleware');
const { isRegisteredEmail } = require('../utlis');

const router = express.Router();

// login 되어 있지 않은지 확인하는 middlewrae 필요
// 각 입력 형식이 적절한지 확인 필요
router.post('/', isEmail, isName, isPassword, async (req, res, next) => {
  const { name, email, password } = req.body;
  
  if (await isRegisteredEmail(User, email)) {
    res.status(409).send({
      message: "이미 사용 중인 email입니다."
    });
    return;
  }

  try {
    await authUser.signUp(name, email, password);

    res.status(201).send({
      message: "성공적으로 가입되었습니다."
    });
    return;
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
    res.status(403).send({
      errorCode: 403,
      message: '로그인 실패'
    });
    return;
  }

  res.status(200).send({
    "access_token": access_token,
    "message": "로그인에 성공하였습니다."
  });

});


module.exports = router;