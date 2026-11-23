import { alimentoRepository } from '../repositories/alimento.repository.js'
import type { CreateAlimento, UpdateAlimento } from '../types/alimento.js'

class AlimentoService {
    async create(dados: CreateAlimento) {
        return alimentoRepository.create(dados)
    }

    async getAll() {
        return alimentoRepository.getAll()
    }

    async getById(id: string) {
        return alimentoRepository.getById(id)
    }

    async update(id: string, dados: UpdateAlimento) {
        return alimentoRepository.update(id, dados)
    }

    async delete(id: string) {
        return alimentoRepository.delete(id)
    }
}

export const alimentoService = new AlimentoService()
