const usersServices = require('../services/userServices.js');
const { verify } = require('../auth/jwtFunctions.js');
const { getTaskById } = require('../models/todoModels.js');

const hasEmailAndPassword = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: 'Dados inválidos. Tente novamente.',
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
      message: 'Dados inválidos. Tente novamente.',
    });
  }
  next();
};

const isUnicEmail = async (req, res, next) => {
  const { email } = req.body;
  const userEmail = await usersServices.findByEmail(email);

  if (userEmail) {
    return res.status(409).json({
      message: 'Email já registrado',
    });
  }
  next();
};

const isTokenValid = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !verify(authorization)) {
    return res.status(409).json({
      message: 'Token inválido ou expirou!'
    });
  }
  next();
}


const findTask = async (req, res, next) => {
  const { id } = req.params;
  const getTask = await getTaskById(id);
  if (!getTask) {
    return res.status(409).json({ message: 'Tarefa não encontrada!' })
  };
  next();
}

const verifyUserIsValid = [
  hasEmailAndPassword,
  isValidEmail,
  isUnicEmail,
];

module.exports = {
  verifyUserIsValid,
  isTokenValid,
  findTask,
};
