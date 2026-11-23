import { pagamentoRepository } from '../repositories/pagamento.repository.js'
import type { CreatePagamento, UpdatePagamento } from '../types/pagamento.js'

class PagamentoService {
    async create(dados: CreatePagamento) {
        return pagamentoRepository.create(dados)
    }

    async getAll() {
        return pagamentoRepository.getAll()
    }

    async getById(id: string) {
        return pagamentoRepository.getById(id)
    }

    async update(id: string, dados: UpdatePagamento) {
        return pagamentoRepository.update(id, dados)
    }

    async delete(id: string) {
        return pagamentoRepository.delete(id)
    }
}

export const pagamentoService = new PagamentoService()
