const Todo = require("../../models/todo");

module.exports = {
    create
}

async function create(req, res) {
    try {
        console.log(req.body, "hello")
    } catch (err) {
        res.status(500).json("bad request")
    }
}
