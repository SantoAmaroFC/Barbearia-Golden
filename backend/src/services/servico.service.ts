import { servicoRepository } from '../repositories/servico.repository.js'
import type { CreateServico, UpdateServico } from '../types/servico.js'

class ServicoService {
    async create(dados: CreateServico) {
        return servicoRepository.create(dados)
    }

    async getAll() {
        return servicoRepository.getAll()
    }

    async getById(id: string) {
        return servicoRepository.getById(id)
    }

    async update(id: string, dados: UpdateServico) {
        return servicoRepository.update(id, dados)
    }

    async delete(id: string) {
        return servicoRepository.delete(id)
    }
}

export const servicoService = new ServicoService()
