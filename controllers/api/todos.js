const Todo = require("../../models/todo");

module.exports = {
    index,
    create,
    deleteTodo,
    update
}

async function index(req, res) {
    try {
        const allTodos = await Todo.find({});
        res.status(200).json(allTodos);
    } catch (err) {
        res.status(500).json("bad request");
    }
}

async function create(req, res) {
    try {
        const newTodo = await Todo.create(req.body);
        res.status(200).json(newTodo);
    } catch (err) {
        res.status(500).json("bad request");
    }
}

async function update(req, res) {
    try {
        const updatedTodo = await Todo.findOneAndUpdate( { _id: req.params.id }, req.body, {new: true} );
        console.log(updatedTodo);
        res.status(200).json(updatedTodo);
    } catch (err) {
        res.status(500).json("bad request");
    }
}

async function deleteTodo(req, res) {
    try {
        const deletedTodo = await Todo.findOneAndDelete({ _id: req.params.id });
        res.status(200).json(deletedTodo);
    } catch (err) {
        res.status(500).json("bad request");
    }
}
