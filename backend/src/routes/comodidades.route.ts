import { Router } from 'express'
import { comodidadeController } from '../controllers/comodidade.controller.js'

export const comodidadesRouter = Router()

comodidadesRouter.post('/', comodidadeController.create)
comodidadesRouter.get('/', comodidadeController.getAll)
comodidadesRouter.get('/:id', comodidadeController.getById)
comodidadesRouter.patch('/:id', comodidadeController.update)
comodidadesRouter.delete('/:id', comodidadeController.delete)
