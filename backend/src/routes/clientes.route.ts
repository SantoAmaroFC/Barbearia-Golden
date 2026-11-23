import { Router } from 'express'
import { clienteController } from '../controllers/cliente.controller.js'

export const clientesRouter = Router()

clientesRouter.post('/', clienteController.create)
clientesRouter.get('/', clienteController.getAll)
clientesRouter.get('/:id', clienteController.getById)
clientesRouter.patch('/:id', clienteController.update)
clientesRouter.delete('/:id', clienteController.delete)
