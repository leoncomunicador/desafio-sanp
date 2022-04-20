const usersServices = require('../services/userServices.js');

const createUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await usersServices.createUser(email, password);

  res.status(201).json(user);
};

module.exports = {
  createUser,
};
