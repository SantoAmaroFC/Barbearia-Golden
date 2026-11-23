import { db } from '../database/knex.js'
import type { CreateBarbeiro, UpdateBarbeiro } from '../types/barbeiro.js'

class BarbeiroRepository {
    async create(dados: CreateBarbeiro) {
        const [registro] = await db('barbeiros').insert(dados).returning('*')
        return registro
    }

    async getAll() {
        return db('barbeiros').select('*').orderBy('id', 'asc')
    }

    async getById(id: string) {
        const [registro] = await db('barbeiros').where({ id }).select('*')
        return registro
    }

    async update(id: string, dados: UpdateBarbeiro) {
        const [registro] = await db('barbeiros').where({ id }).update(dados).returning('*')
        return registro
    }

    async delete(id: string) {
        const [registro] = await db('barbeiros').where({ id }).del().returning('*')
        return registro
    }
}

export const barbeiroRepository = new BarbeiroRepository()
