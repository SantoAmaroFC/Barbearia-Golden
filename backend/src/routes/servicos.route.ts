import { Router } from 'express'
import { servicoController } from '../controllers/servico.controller.js'

export const servicosRouter = Router()

servicosRouter.post('/', servicoController.create)
servicosRouter.get('/', servicoController.getAll)
servicosRouter.get('/:id', servicoController.getById)
servicosRouter.patch('/:id', servicoController.update)
servicosRouter.delete('/:id', servicoController.delete)
