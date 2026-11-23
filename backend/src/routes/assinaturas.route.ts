import { Router } from 'express'
import { assinaturaController } from '../controllers/assinatura.controller.js'

export const assinaturasRouter = Router()

assinaturasRouter.post('/', assinaturaController.create)
assinaturasRouter.get('/', assinaturaController.getAll)
assinaturasRouter.get('/:id', assinaturaController.getById)
assinaturasRouter.patch('/:id', assinaturaController.update)
assinaturasRouter.delete('/:id', assinaturaController.delete)
