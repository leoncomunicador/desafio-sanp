const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const { tasks } = require('./src/routes');

app.use(bodyParser.json());

const port = 3000;

app.use('/tasks', tasks);

app.listen(port, () => console.log(`Aplicação rodando na porta ${port}!`));
