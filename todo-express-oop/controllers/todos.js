import { Todo } from '../models/todo.js'

class todoController {
    constructor() {
        this.TODOS = []
    }

    createTodo(req, res) {
        const task = req.body.task
        const newTodo = new Todo(Math.random().toString(), task)

        this.TODOS.push(newTodo)

        res.json({
            message: 'created new todo project',
            newTask: newTodo
        })

    }

}

export const TodoController = new todoController()