const express = require('express');
const router = express.Router();
const todosCtrl = require('../../controllers/api/todos');

router.get("/", todosCtrl.index)
router.post("/", todosCtrl.create)
router.delete("/:id", todosCtrl.deleteTodo)

module.exports = router;
