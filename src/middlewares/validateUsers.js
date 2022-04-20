const usersServices = require('../services/userServices.js');

const hasEmailAndPassword = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: 'Invalid entries. Try again.',
    });
  }
  next();
};

const isValidEmail = (req, res, next) => {
  const { email } = req.body;
  if (
    !email
    || !email.includes('@')
    || !email.includes('.com')
  ) {
    return res.status(400).json({
      message: 'Invalid entries. Try again.',
    });
  }
  next();
};

const isUnicEmail = async (req, res, next) => {
  const { email } = req.body;
  const userEmail = await usersServices.findByEmail(email);

  if (userEmail) {
    return res.status(409).json({
      message: 'Email already registered',
    });
  }
  next();
};

const verifyUserIsValid = [
  hasEmailAndPassword,
  isValidEmail,
  isUnicEmail,
];

module.exports = {
  verifyUserIsValid,
};
