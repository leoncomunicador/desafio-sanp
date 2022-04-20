const router = require('express').Router();
const toDoControllers = require('../controllers/todoControllers.js');
const middleware = require('../middlewares/validateUsers.js');

router.get('/', toDoControllers.getAllTasks);
router.get('/:id', middleware.findTask, toDoControllers.getTaskById);
router.post('/', middleware.isTokenValid, toDoControllers.createTask);
router.put('/:id', middleware.isTokenValid, middleware.findTask, toDoControllers.updateTask);
router.delete('/:id', middleware.isTokenValid, middleware.findTask, toDoControllers.excludeTask);



module.exports = router;
