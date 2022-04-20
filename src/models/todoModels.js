const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAllTasks = async () => {
  const db = await connection();
  const tasks = await db.collection('todo-list-sanp').find().toArray();
  return tasks;
}

const getByTask = async (task) => {
  const db = await connection();
  return db.collection('todo-list-sanp').findOne({ task });
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

}

const excludeTask = async (id) => {
  const db = await connection();
  await db.collection('todo-list-sanp').deleteOne({ _id: ObjectId(id) });
};

module.exports = {
  getAllTasks,
  getByTask,
  createTask,
  updateTask,
  excludeTask,
}
