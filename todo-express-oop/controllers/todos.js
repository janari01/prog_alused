import { fileManager } from '../utils/files.js'
import { Todo } from '../models/todo.js'

class todoController {
    constructor() {
        this.initTodos()
    }

    async createTodo(req, res) {
        const task = req.body.task
        const newTodo = new Todo(Math.random().toString(), task)

        this.TODOS.push(newTodo)

        await fileManager.writeFile('./data/todos.json', this.TODOS)

        res.json({
            message: 'created new todo project',
            newTask: newTodo
        })

    }

    async initTodos() {
        const todosData = await fileManager.readFile('./data/todos.json')
        if (todosData !== null) {
            this.TODOS = todosData
        } else {
            this.TODOS = []
        }
    }

    getTodos(req, res) {
        res.json({task: this.TODOS})
    }

    async updateTodo(req, res) {
        const todoId = req.params.id

        const updatedTask = req.body.task

        const todosData = await fileManager.readFile('./data/todos.json')
        if (todosData !== null) {
            todosData.forEach((el, i) => {
                if (el.id === todoId) {
                    this.TODOS[i] = {id: todoId, task: updatedTask}
                }
            })
        } else {
            res.json({
                message: 'Failed to update todo'
            })
        }
        await fileManager.writeFile('./data/todos.json', this.TODOS)

        res.json({
            message: 'Updated todo'
        })
    }

    async removeTodo(req, res) {
        const todoId = req.params.id

        const todoIndex = this.TODOS.findIndex(todo => todo.id === todoId)
        if (todoIndex < 0) {
            // throw new Error('Could not find todo!')
            res.json({
                message: 'Could not find todo with such index'
            })
        }

        const todosData = await fileManager.readFile('./data/todos.json')
        if (todosData !== null) {
            todosData.forEach((el, i) => {
                if (el.id === todoId) {
                    this.TODOS.splice(i, 1)
                }
            })
        }
        await fileManager.writeFile('./data/todos.json', this.TODOS)

        res.json({
            message: 'Removed todo'
        })
    }

}

export const TodoController = new todoController()