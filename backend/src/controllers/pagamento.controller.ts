import { type Request, type Response } from 'express'
import { pagamentoService } from '../services/pagamento.service.js'
import type { CreatePagamento, UpdatePagamento } from '../types/pagamento.js'

class PagamentoController {
    async create(req: Request<{}, unknown, CreatePagamento>, res: Response) {
        try {
            const registro = await pagamentoService.create(req.body)
            return res.status(201).json(registro)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Erro ao cadastrar registro' })
        }
    }

    async getAll(_req: Request, res: Response) {
        try {
            const registros = await pagamentoService.getAll()
            return res.status(200).json(registros)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Erro ao listar registros' })
        }
    }

    async getById(req: Request<{ id: string }>, res: Response) {
        try {
            const registro = await pagamentoService.getById(req.params.id)
            if (!registro) return res.status(404).json({ message: 'Registro não encontrado' })
            return res.status(200).json(registro)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Erro ao buscar registro' })
        }
    }

    async update(req: Request<{ id: string }, unknown, UpdatePagamento>, res: Response) {
        try {
            const registro = await pagamentoService.update(req.params.id, req.body)
            if (!registro) return res.status(404).json({ message: 'Registro não encontrado' })
            return res.status(200).json(registro)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Erro ao atualizar registro' })
        }
    }

    async delete(req: Request<{ id: string }>, res: Response) {
        try {
            const registro = await pagamentoService.delete(req.params.id)
            if (!registro) return res.status(404).json({ message: 'Registro não encontrado' })
            return res.status(200).json({ message: 'Registro excluído com sucesso', registro })
        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Erro ao excluir registro' })
        }
    }
}

export const pagamentoController = new PagamentoController()
