import { db } from '../database/knex.js'
import type { CreateAlimento, UpdateAlimento } from '../types/alimento.js'

class AlimentoRepository {
    async create(dados: CreateAlimento) {
        const [registro] = await db('alimentos').insert(dados).returning('*')
        return registro
    }

    async getAll() {
        return db('alimentos').select('*').orderBy('id', 'asc')
    }

    async getById(id: string) {
        const [registro] = await db('alimentos').where({ id }).select('*')
        return registro
    }

    async update(id: string, dados: UpdateAlimento) {
        const [registro] = await db('alimentos').where({ id }).update(dados).returning('*')
        return registro
    }

    async delete(id: string) {
        const [registro] = await db('alimentos').where({ id }).del().returning('*')
        return registro
    }
}

export const alimentoRepository = new AlimentoRepository()
