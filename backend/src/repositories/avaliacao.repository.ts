import { db } from '../database/knex.js'
import type { CreateAvaliacao, UpdateAvaliacao } from '../types/avaliacao.js'

class AvaliacaoRepository {
    async create(dados: CreateAvaliacao) {
        const [registro] = await db('avaliacoes').insert(dados).returning('*')
        return registro
    }

    async getAll() {
        return db('avaliacoes').select('*').orderBy('id', 'asc')
    }

    async getById(id: string) {
        const [registro] = await db('avaliacoes').where({ id }).select('*')
        return registro
    }

    async update(id: string, dados: UpdateAvaliacao) {
        const [registro] = await db('avaliacoes').where({ id }).update(dados).returning('*')
        return registro
    }

    async delete(id: string) {
        const [registro] = await db('avaliacoes').where({ id }).del().returning('*')
        return registro
    }
}

export const avaliacaoRepository = new AvaliacaoRepository()
