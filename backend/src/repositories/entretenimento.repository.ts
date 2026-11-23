import { db } from '../database/knex.js'
import type { CreateEntretenimento, UpdateEntretenimento } from '../types/entretenimento.js'

class EntretenimentoRepository {
    async create(dados: CreateEntretenimento) {
        const [registro] = await db('entretenimentos').insert(dados).returning('*')
        return registro
    }

    async getAll() {
        return db('entretenimentos').select('*').orderBy('id', 'asc')
    }

    async getById(id: string) {
        const [registro] = await db('entretenimentos').where({ id }).select('*')
        return registro
    }

    async update(id: string, dados: UpdateEntretenimento) {
        const [registro] = await db('entretenimentos').where({ id }).update(dados).returning('*')
        return registro
    }

    async delete(id: string) {
        const [registro] = await db('entretenimentos').where({ id }).del().returning('*')
        return registro
    }
}

export const entretenimentoRepository = new EntretenimentoRepository()
