const router = require('express').Router();
const rescue = require('express-rescue');

const loginControllers = require('../controllers/loginControllers');

router.post('/', rescue(loginControllers.createLogin));

module.exports = router;
