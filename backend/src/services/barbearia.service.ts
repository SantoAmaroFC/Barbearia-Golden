import { barbeariaRepository } from '../repositories/barbearia.repository.js'
import type { CreateBarbearia, UpdateBarbearia } from '../types/barbearia.js'

class BarbeariaService {
    async create(dados: CreateBarbearia) {
        return barbeariaRepository.create(dados)
    }

    async getAll() {
        return barbeariaRepository.getAll()
    }

    async getById(id: string) {
        return barbeariaRepository.getById(id)
    }

    async update(id: string, dados: UpdateBarbearia) {
        return barbeariaRepository.update(id, dados)
    }

    async delete(id: string) {
        return barbeariaRepository.delete(id)
    }
}

export const barbeariaService = new BarbeariaService()
