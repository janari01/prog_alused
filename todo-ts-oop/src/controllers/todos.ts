import { Request, Response, NextFunction } from "express";
import { Todo } from "../models/todo";

class todoController {
  todos: Todo[];
  constructor(todos: Todo[] = []) {
    this.todos = todos
  }

  createTodo = (req: Request, res: Response, next: NextFunction) => {
    try {
      const task = (req.body as {task: string}).task
      const newTodo = new Todo(Math.random().toString(), task)
      this.todos.push(newTodo)
      res.status(201).json({
        message: 'Created new todo',
        createdtask: newTodo
    })
    } catch(err) {
      console.log(err)
    }
  }

  getTodos = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(201).json({
        tasks: this.todos
      })
    } catch(err) {
      console.log(err)
    }
  }

  updateTodo = (req: Request, res: Response, next: NextFunction) => {
    try {
      const todoId = req.params.id
      const updatedTask = (req.body as {task: string}).task
      const todoIndex = this.todos.findIndex(todo => todo.id === todoId)
  
      if (todoIndex < 0) {
        throw new Error('Id not correct/missing')
      }
  
      this.todos[todoIndex] = new Todo(this.todos[todoIndex].id, updatedTask)
  
      res.status(201).json({
        message: 'Updated',
        updatedTask: this.todos[todoIndex]
      })
    } catch(err) {
      console.log(err)
    }
  }

  deleteTodo = (req: Request, res: Response, next: NextFunction) => {
    try {
      const todoId = req.params.id
      const todoIndex = this.todos.findIndex(todo => todo.id === todoId)
  
      if (todoIndex < 0) {
        throw new Error('Id not correct/missing')
      }
  
      this.todos.splice(todoIndex, 1)
  
      res.status(201).json({
        message: 'Deleted',
      })
    } catch(err) {
      console.log(err)
    }
  }
}

export const TodoController = new todoController()