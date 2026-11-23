import { Router } from 'express'
import { entretenimentoController } from '../controllers/entretenimento.controller.js'

export const entretenimentosRouter = Router()

entretenimentosRouter.post('/', entretenimentoController.create)
entretenimentosRouter.get('/', entretenimentoController.getAll)
entretenimentosRouter.get('/:id', entretenimentoController.getById)
entretenimentosRouter.patch('/:id', entretenimentoController.update)
entretenimentosRouter.delete('/:id', entretenimentoController.delete)
