import { db } from '../database/knex.js'
import type { CreatePagamento, UpdatePagamento } from '../types/pagamento.js'

class PagamentoRepository {
    async create(dados: CreatePagamento) {
        const [registro] = await db('pagamentos').insert(dados).returning('*')
        return registro
    }

    async getAll() {
        return db('pagamentos').select('*').orderBy('id', 'asc')
    }

    async getById(id: string) {
        const [registro] = await db('pagamentos').where({ id }).select('*')
        return registro
    }

    async update(id: string, dados: UpdatePagamento) {
        const [registro] = await db('pagamentos').where({ id }).update(dados).returning('*')
        return registro
    }

    async delete(id: string) {
        const [registro] = await db('pagamentos').where({ id }).del().returning('*')
        return registro
    }
}

export const pagamentoRepository = new PagamentoRepository()
