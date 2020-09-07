const express = require('express');

const { User } = require('../repositories');
const AuthUser = require('../services/authUser');
const authUser = new AuthUser(User);

const { isRegisteredEmail, createHash } = require('../utlis');

const router = express.Router();

// login 되어 있지 않은지 확인하는 middlewrae 필요
// 각 입력 형식이 적절한지 확인 필요
router.post('/', async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    if (isRegisteredEmail(User, email)) {
      res.status(409).json({
        message: "이미 사용 중인 email입니다."
      });
    }

    authUser.singUp(name, email, password);
    
    res.status(201).send();
  } catch (error) {
    console.error(error);
    next(error);
  }
});
