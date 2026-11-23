import { entretenimentoRepository } from '../repositories/entretenimento.repository.js'
import type { CreateEntretenimento, UpdateEntretenimento } from '../types/entretenimento.js'

class EntretenimentoService {
    async create(dados: CreateEntretenimento) {
        return entretenimentoRepository.create(dados)
    }

    async getAll() {
        return entretenimentoRepository.getAll()
    }

    async getById(id: string) {
        return entretenimentoRepository.getById(id)
    }

    async update(id: string, dados: UpdateEntretenimento) {
        return entretenimentoRepository.update(id, dados)
    }

    async delete(id: string) {
        return entretenimentoRepository.delete(id)
    }
}

export const entretenimentoService = new EntretenimentoService()
