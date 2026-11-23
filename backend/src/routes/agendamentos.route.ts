import { Router } from 'express'
import { agendamentoController } from '../controllers/agendamento.controller.js'

export const agendamentosRouter = Router()

agendamentosRouter.post('/', agendamentoController.create)
agendamentosRouter.get('/', agendamentoController.getAll)
agendamentosRouter.get('/:id', agendamentoController.getById)
agendamentosRouter.patch('/:id', agendamentoController.update)
agendamentosRouter.delete('/:id', agendamentoController.delete)
