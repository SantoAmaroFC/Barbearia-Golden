import { planoRepository } from '../repositories/plano.repository.js'
import type { CreatePlano, UpdatePlano } from '../types/plano.js'

class PlanoService {
    async create(dados: CreatePlano) {
        return planoRepository.create(dados)
    }

    async getAll() {
        return planoRepository.getAll()
    }

    async getById(id: string) {
        return planoRepository.getById(id)
    }

    async update(id: string, dados: UpdatePlano) {
        return planoRepository.update(id, dados)
    }

    async delete(id: string) {
        return planoRepository.delete(id)
    }
}

export const planoService = new PlanoService()
