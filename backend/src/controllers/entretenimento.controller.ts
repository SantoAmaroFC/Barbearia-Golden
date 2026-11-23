import { type Request, type Response } from 'express'
import { entretenimentoService } from '../services/entretenimento.service.js'
import type { CreateEntretenimento, UpdateEntretenimento } from '../types/entretenimento.js'

class EntretenimentoController {
    async create(req: Request<{}, unknown, CreateEntretenimento>, res: Response) {
        try {
            const registro = await entretenimentoService.create(req.body)
            return res.status(201).json(registro)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Erro ao cadastrar registro' })
        }
    }

    async getAll(_req: Request, res: Response) {
        try {
            const registros = await entretenimentoService.getAll()
            return res.status(200).json(registros)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Erro ao listar registros' })
        }
    }

    async getById(req: Request<{ id: string }>, res: Response) {
        try {
            const registro = await entretenimentoService.getById(req.params.id)
            if (!registro) return res.status(404).json({ message: 'Registro não encontrado' })
            return res.status(200).json(registro)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Erro ao buscar registro' })
        }
    }

    async update(req: Request<{ id: string }, unknown, UpdateEntretenimento>, res: Response) {
        try {
            const registro = await entretenimentoService.update(req.params.id, req.body)
            if (!registro) return res.status(404).json({ message: 'Registro não encontrado' })
            return res.status(200).json(registro)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Erro ao atualizar registro' })
        }
    }

    async delete(req: Request<{ id: string }>, res: Response) {
        try {
            const registro = await entretenimentoService.delete(req.params.id)
            if (!registro) return res.status(404).json({ message: 'Registro não encontrado' })
            return res.status(200).json({ message: 'Registro excluído com sucesso', registro })
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Erro ao excluir registro' })
        }
    }
}

export const entretenimentoController = new EntretenimentoController()
