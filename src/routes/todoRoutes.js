const router = require('express').Router();
const toDoControllers = require('../controllers/todoControllers.js');
const middleware = require('../middlewares/checkTasks');


router.get('/', toDoControllers.getAllTasks);

router.post('/', middleware.taskName, toDoControllers.createTask);

router.put('/:id', middleware.verifyHasTask, middleware.taskName, toDoControllers.updateTask);

router.delete('/:id', toDoControllers.excludeTask);



module.exports = router;
