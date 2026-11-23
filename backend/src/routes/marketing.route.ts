import { Router } from 'express'
import { marketingController } from '../controllers/marketing.controller.js'

export const marketingRouter = Router()

marketingRouter.post('/', marketingController.create)
marketingRouter.get('/', marketingController.getAll)
marketingRouter.get('/:id', marketingController.getById)
marketingRouter.patch('/:id', marketingController.update)
marketingRouter.delete('/:id', marketingController.delete)
