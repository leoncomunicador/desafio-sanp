const toDoServices = require('../services/todoServices.js');
const { verify } = require('../auth/jwtFunctions.js');

const getAllTasks = async (req, res) => {
  const tasks = await toDoServices.getAllTasks();
  res.status(200).json({ tasks });
};

const getTaskById = async (req, res) => {
  const { id } = req.params;

  const showTask = await toDoServices.getTaskById(id);

  res.status(200).json(showTask);
};

const createTask = async (req, res) => {
  const { authorization } = req.headers;
  console.log(authorization);
  const { task } = req.body;
  console.log(verify(authorization));
  // const newTask = await toDoServices.createTask(verify(authorization), task);
  const newTask = await toDoServices.createTask(task);

  res.status(201).json(newTask);
};

const updateTask = async (req, res) => {
  // const { authorization: token } = req.headers;
  const { id } = req.params;
  const { task } = req.body;

  // const taskUpdated = await toDoServices.updateTask(id, task, token);
  const taskUpdated = await toDoServices.updateTask(id, task);

  res.status(201).json(taskUpdated);
};

const excludeTask = async (req, res) => {
  const { id } = req.params;
  // const { authorization: token } = req.headers;
  const task = await toDoServices.excludeTask(id);

  res.status(200).json(task);
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  excludeTask,
};
