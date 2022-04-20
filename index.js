const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { tasks, users, login } = require('./src/routes');

app.use(bodyParser.json());

const port = 3000;

app.use('/tasks', tasks);

app.use('/users', users);

app.use('/login', login);

app.listen(port, () => console.log(`Aplicação rodando na porta ${port}!`));
