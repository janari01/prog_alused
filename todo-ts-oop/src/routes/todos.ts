import { Router } from 'express'
import { TodoController } from '../controllers/todos'

const router = Router()

router.post('/', (req, res, next) => TodoController.createTodo(req, res, next))
router.get('/', (req, res, next) => TodoController.getTodos(req, res, next))
router.patch('/:id', (req, res, next) => TodoController.updateTodo(req, res, next))
router.delete('/:id', (req, res, next) => TodoController.deleteTodo(req, res, next))

export default router