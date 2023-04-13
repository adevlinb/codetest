const Todo = require("../../models/todo");

module.exports = {
    create
}

async function create(req, res) {
    try {
        const newTodo = await Todo.create(req.body);
        console.log(newTodo);
        res.status(200).json(newTodo);
    } catch (err) {
        res.status(500).json("bad request")
    }
}
