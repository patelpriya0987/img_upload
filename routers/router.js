const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
const upload = require('../config/multerConfig');

router.get('/' , controller.defaultController);
router.post('/todo' , upload.single('fileDoc') , controller.addTodoController);
router.get('/edit/:id' , controller.editTodoController);
router.post('/update/:id', controller.updateTodoController);
router.get('/delet/:id', controller.deleteTodoController)

module.exports = router;