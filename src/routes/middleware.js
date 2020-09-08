const { isEmail, isName, isPassword } = require('../utlis');

exports.isEmail = (req, res, next) => {
  try {
    if (isEmail(req.email)) {
      next();
    }
  } catch (error) {
    res.status(error.status).send({
      message: error.message,
      cause: error.cause
    });
  }
};

exports.isName = (req, res, next) => {
  try {
    if (isName(req.name)) {
      next();
    }
  } catch (error) {
    res.status(error.status).send({
      message: error.message,
      cause: error.cause
    });
  }
};

exports.isPassword = (req, res, next) => {
  try {
    if (isPassword(req.password)) {
      next();
    }
  } catch (error) {
    res.status(error.status).send({
      message: error.message,
      cause: error.cause
    });
  }
};