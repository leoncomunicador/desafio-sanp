const toDoModels = require('../models/todoModels.js');

const getAllTasks = async () => {
  const tasks = await toDoModels.getAllTasks();
  return tasks;
};

const getTaskById = async (id) => {
  const getTask = await toDoModels.getTaskById(id);
  return getTask;
};

const createTask = async (task) => {
  const newTask = await toDoModels.createTask(task);
  return newTask;
};

const updateTask = async (id, task) => {
  await toDoModels.updateTask(id, task);
  const taskUpdated = await toDoModels.updateTask(id, task);
  return taskUpdated;
};

const excludeTask = async (id) => {
  const excludeTask = await toDoModels.excludeTask(id);
  return excludeTask;
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  excludeTask,
};
