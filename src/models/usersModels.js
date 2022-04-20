const connection = require('./connection');

const createUser = async (email, password) => { // função para criar um novo usuário
  const { insertedId } = await connection().then((db) => db
    .collection('users').insertOne({ email, password }));
  return { email, _id: insertedId };
};

const findByEmail = async (email) => { // função que verifica se existe o e-mail do usuário
  const emailUser = await connection().then((db) => db
    .collection('users').findOne({ email }));
  return emailUser;
};

module.exports = {
  createUser,
  findByEmail,
};
