import { Router } from 'express'
import { pagamentoController } from '../controllers/pagamento.controller.js'

export const pagamentosRouter = Router()

pagamentosRouter.post('/', pagamentoController.create)
pagamentosRouter.get('/', pagamentoController.getAll)
pagamentosRouter.get('/:id', pagamentoController.getById)
pagamentosRouter.patch('/:id', pagamentoController.update)
pagamentosRouter.delete('/:id', pagamentoController.delete)
