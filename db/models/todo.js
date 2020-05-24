const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
});

module.exports = new mongoose.Model('todo', todoSchema, 'todos');