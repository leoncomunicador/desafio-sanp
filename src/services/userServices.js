const usersModels = require('../models/usersModels.js');
const { create } = require('../auth/jwtFunctions.js');

const createUser = async (email, password) => {
  const user = await usersModels.createUser(email, password);
  return user;
};

const findByEmail = async (email) => {
  const userEmail = await usersModels.findByEmail(email);
  return userEmail;
};

const createLogin = async ({ email, password }) => {
  const user = await usersModels.findOne({ where: { email, password } });
  console.log(user);
  const validateTokenUser = responseToken.create(user.id, email);
  return validateTokenUser;
};

const userLogin = async (email) => { // essa função vai criar o token após ter cadastrado o usuário
  const user = await usersModels.findByEmail(email);
  // const token = create(user);
  // return token;
  return user;
};

module.exports = {
  createUser,
  createLogin,
  findByEmail,
  userLogin,
};
