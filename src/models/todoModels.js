const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAllTasks = async () => {
  const db = await connection();
  const tasks = await db.collection('todo-list-sanp').find().toArray();
  return tasks;
}

const getTaskById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  
  const db = await connection();
  return db.collection('todo-list-sanp').findOne(ObjectId(id));;
}


const createTask = async (task) => {
  const { insertedId } = await connection().then((db) => db
    .collection('todo-list-sanp').insertOne({ task }));
  return { _id: insertedId, task };
}

const updateTask = async (id, task) => {
  if (!ObjectId.isValid(id)) return null;

  await connection()
    .then((db) => db
      .collection('todo-list-sanp')
      .updateOne({ _id: ObjectId(id) }, { $set: { task } }));

  const updateTask = await getTaskById(id);
  return updateTask;
}

const excludeTask = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  
  const db = await connection();
  await db.collection('todo-list-sanp').deleteOne({ _id: ObjectId(id) });
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  excludeTask,
}
