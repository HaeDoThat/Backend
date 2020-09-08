const { Router } = require('express');
const user = require('./userRouter');


const router = Router();

router.use('/user', user);


module.exports = router;

