const { findByEmail } = require('../models/usersModels.js');

const { create } = require('../auth/jwtFunctions.js');

const createLogin = async (req, res) => {
  const { email, password } = req.body;

  const verifyUser = await findByEmail(email);

  if (verifyUser.password === password) {
    const token = create(email);
    return res.status(200).json({ token });
  }
  else {
    return res.status(400).json({ message: 'Email ou senha incorretos' });
  }
};

module.exports = {
  createLogin,
};
