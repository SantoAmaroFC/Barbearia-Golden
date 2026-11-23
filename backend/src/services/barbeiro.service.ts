import { barbeiroRepository } from '../repositories/barbeiro.repository.js'
import type { CreateBarbeiro, UpdateBarbeiro } from '../types/barbeiro.js'

class BarbeiroService {
    async create(dados: CreateBarbeiro) {
        return barbeiroRepository.create(dados)
    }

    async getAll() {
        return barbeiroRepository.getAll()
    }

    async getById(id: string) {
        return barbeiroRepository.getById(id)
    }

    async update(id: string, dados: UpdateBarbeiro) {
        return barbeiroRepository.update(id, dados)
    }

    async delete(id: string) {
        return barbeiroRepository.delete(id)
    }
}

export const barbeiroService = new BarbeiroService()
