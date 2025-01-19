"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
var todo_1 = require("../models/todo");
var todos = [];
var createTodo = function (req, res, next) {
    try {
        var task = req.body.task;
        var newTodo = new todo_1.Todo(Math.random().toString(), task);
        todos.push(newTodo);
        res.status(201).json({
            message: 'Created new todo',
            createdtask: newTodo
        });
    }
    catch (err) {
        console.log(err);
    }
};
exports.createTodo = createTodo;
