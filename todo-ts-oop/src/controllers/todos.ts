import { Request, Response, NextFunction } from "express";
import { Todo } from "../models/todo";

const todos: Todo[] = []

export const createTodo = (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = (req.body as {task: string}).task
    const newTodo = new Todo(Math.random().toString(), task)
    todos.push(newTodo)
    res.status(201).json({
      message: 'Created new todo',
      createdtask: newTodo
    })
  } catch(err) {
    console.log(err)
  }
}