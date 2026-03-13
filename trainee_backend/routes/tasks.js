const express = require('express');
const tasksController = require('../controllers/tasksController');

const router = express.Router();

router.get('/', tasksController.getTasks);
router.post('/', tasksController.createTask);
router.delete('/:id', tasksController.deleteTask);

module.exports = router;