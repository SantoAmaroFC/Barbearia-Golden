import { Router } from 'express'
import { alimentoController } from '../controllers/alimento.controller.js'

export const alimentosRouter = Router()

alimentosRouter.post('/', alimentoController.create)
alimentosRouter.get('/', alimentoController.getAll)
alimentosRouter.get('/:id', alimentoController.getById)
alimentosRouter.patch('/:id', alimentoController.update)
alimentosRouter.delete('/:id', alimentoController.delete)
