import { Router } from 'express'
import { planoController } from '../controllers/plano.controller.js'

export const planosRouter = Router()

planosRouter.post('/', planoController.create)
planosRouter.get('/', planoController.getAll)
planosRouter.get('/:id', planoController.getById)
planosRouter.patch('/:id', planoController.update)
planosRouter.delete('/:id', planoController.delete)
