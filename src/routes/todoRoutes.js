const router = require('express').Router();
const toDoControllers = require('../controllers/todoControllers.js');
const middleware = require('../middlewares/validateUsers.js');



router.get('/', toDoControllers.getAllTasks);
router.get('/:id', toDoControllers.getTaskById);
router.post('/', middleware.isTokenValid ,toDoControllers.createTask);
router.put('/:id', toDoControllers.updateTask);
router.delete('/:id', toDoControllers.excludeTask);



module.exports = router;
