import { Router } from 'express'
import { barbeariaController } from '../controllers/barbearia.controller.js'

export const barbeariaRouter = Router()

barbeariaRouter.post('/', barbeariaController.create)
barbeariaRouter.get('/', barbeariaController.getAll)
barbeariaRouter.get('/:id', barbeariaController.getById)
barbeariaRouter.patch('/:id', barbeariaController.update)
barbeariaRouter.delete('/:id', barbeariaController.delete)
