import { assinaturaRepository } from '../repositories/assinatura.repository.js'
import type { CreateAssinatura, UpdateAssinatura } from '../types/assinatura.js'

class AssinaturaService {
    async create(dados: CreateAssinatura) {
        return assinaturaRepository.create(dados)
    }

    async getAll() {
        return assinaturaRepository.getAll()
    }

    async getById(id: string) {
        return assinaturaRepository.getById(id)
    }

    async update(id: string, dados: UpdateAssinatura) {
        return assinaturaRepository.update(id, dados)
    }

    async delete(id: string) {
        return assinaturaRepository.delete(id)
    }
}

export const assinaturaService = new AssinaturaService()
