const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    description: { type: String },
    completed: {
        type: Boolean,
        default: false
    },
}, {
	timestamps: true
});

module.exports = mongoose.model("Todo", todoSchema);
