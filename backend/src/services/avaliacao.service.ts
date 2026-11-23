import { avaliacaoRepository } from '../repositories/avaliacao.repository.js'
import type { CreateAvaliacao, UpdateAvaliacao } from '../types/avaliacao.js'

class AvaliacaoService {
    async create(dados: CreateAvaliacao) {
        return avaliacaoRepository.create(dados)
    }

    async getAll() {
        return avaliacaoRepository.getAll()
    }

    async getById(id: string) {
        return avaliacaoRepository.getById(id)
    }

    async update(id: string, dados: UpdateAvaliacao) {
        return avaliacaoRepository.update(id, dados)
    }

    async delete(id: string) {
        return avaliacaoRepository.delete(id)
    }
}

export const avaliacaoService = new AvaliacaoService()
