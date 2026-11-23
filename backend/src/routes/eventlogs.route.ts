import { Router } from 'express'
import { eventlogController } from '../controllers/eventlog.controller.js'

export const eventlogsRouter = Router()

eventlogsRouter.post('/', eventlogController.create)
eventlogsRouter.get('/', eventlogController.getAll)
eventlogsRouter.get('/:id', eventlogController.getById)
eventlogsRouter.patch('/:id', eventlogController.update)
eventlogsRouter.delete('/:id', eventlogController.delete)
