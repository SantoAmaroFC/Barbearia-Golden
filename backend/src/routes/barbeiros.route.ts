import { Router } from 'express'
import { barbeiroController } from '../controllers/barbeiro.controller.js'

export const barbeirosRouter = Router()

barbeirosRouter.post('/', barbeiroController.create)
barbeirosRouter.get('/', barbeiroController.getAll)
barbeirosRouter.get('/:id', barbeiroController.getById)
barbeirosRouter.patch('/:id', barbeiroController.update)
barbeirosRouter.delete('/:id', barbeiroController.delete)
