import { Router } from 'express'
import { avaliacaoController } from '../controllers/avaliacao.controller.js'

export const avaliacoesRouter = Router()

avaliacoesRouter.post('/', avaliacaoController.create)
avaliacoesRouter.get('/', avaliacaoController.getAll)
avaliacoesRouter.get('/:id', avaliacaoController.getById)
avaliacoesRouter.patch('/:id', avaliacaoController.update)
avaliacoesRouter.delete('/:id', avaliacaoController.delete)
