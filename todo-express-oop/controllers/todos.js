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

    getTodos(req, res) {
        res.json({task: this.TODOS})
    }

    updateTodo(req, res) {
        const todoId = req.params.id

        const updatedTask = req.body.task

        const todoIndex = this.TODOS.findIndex(todo => todo.id === todoId)

        if (todoIndex < 0) {
            // throw new Error('Could not find todo!')
            res.json({
                message: 'Could not find todo with such index'
            })
        }
        this.TODOS[todoIndex] = new Todo(this.TODOS[todoIndex].id, updatedTask)

        res.json({
            message: 'Updated todo',
            updatedTask: this.TODOS[todoIndex]
        })
    }

    removeTodo(req, res) {
        const todoId = req.params.id

        const todoIndex = this.TODOS.findIndex(todo => todo.id === todoId)
        if (todoIndex < 0) {
            // throw new Error('Could not find todo!')
            res.json({
                message: 'Could not find todo with such index'
            })
        }

        this.TODOS.splice(todoIndex, 1)

        res.json({
            message: 'Removed todo'
        })
    }

}

export const TodoController = new todoController()