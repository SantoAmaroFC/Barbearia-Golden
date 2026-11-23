import { comodidadeRepository } from '../repositories/comodidade.repository.js'
import type { CreateComodidade, UpdateComodidade } from '../types/comodidade.js'

class ComodidadeService {
    async create(dados: CreateComodidade) {
        return comodidadeRepository.create(dados)
    }

    async getAll() {
        return comodidadeRepository.getAll()
    }

    async getById(id: string) {
        return comodidadeRepository.getById(id)
    }

    async update(id: string, dados: UpdateComodidade) {
        return comodidadeRepository.update(id, dados)
    }

    async delete(id: string) {
        return comodidadeRepository.delete(id)
    }
}

export const comodidadeService = new ComodidadeService()
