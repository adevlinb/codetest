const Todo = require("../../models/todo");

module.exports = {
    index,
    create
}

async function index(req, res) {
    try {
        const allTodos = await Todo.find({});
        res.status(200).json(allTodos);
    } catch (err) {
        res.status(500).json("bad request")
    }
}

async function create(req, res) {
    try {
        const newTodo = await Todo.create(req.body);
        res.status(200).json(newTodo);
    } catch (err) {
        res.status(500).json("bad request")
    }
}
