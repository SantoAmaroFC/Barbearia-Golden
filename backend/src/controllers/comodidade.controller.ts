import { type Request, type Response } from 'express'
import { comodidadeService } from '../services/comodidade.service.js'
import type { CreateComodidade, UpdateComodidade } from '../types/comodidade.js'

class ComodidadeController {
    async create(req: Request<{}, unknown, CreateComodidade>, res: Response) {
        try {
            const registro = await comodidadeService.create(req.body)
            return res.status(201).json(registro)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Erro ao cadastrar registro' })
        }
    }

    async getAll(_req: Request, res: Response) {
        try {
            const registros = await comodidadeService.getAll()
            return res.status(200).json(registros)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Erro ao listar registros' })
        }
    }

    async getById(req: Request<{ id: string }>, res: Response) {
        try {
            const registro = await comodidadeService.getById(req.params.id)
            if (!registro) return res.status(404).json({ message: 'Registro não encontrado' })
            return res.status(200).json(registro)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Erro ao buscar registro' })
        }
    }

    async update(req: Request<{ id: string }, unknown, UpdateComodidade>, res: Response) {
        try {
            const registro = await comodidadeService.update(req.params.id, req.body)
            if (!registro) return res.status(404).json({ message: 'Registro não encontrado' })
            return res.status(200).json(registro)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Erro ao atualizar registro' })
        }
    }

    async delete(req: Request<{ id: string }>, res: Response) {
        try {
            const registro = await comodidadeService.delete(req.params.id)
            if (!registro) return res.status(404).json({ message: 'Registro não encontrado' })
            return res.status(200).json({ message: 'Registro excluído com sucesso', registro })
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Erro ao excluir registro' })
        }
    }
}

export const comodidadeController = new ComodidadeController()
