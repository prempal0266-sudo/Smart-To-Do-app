const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    dueDate: Date,
    priority: String,
    completed: {
        type: Boolean,
        default: false
    },
    dueDate: Date
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);