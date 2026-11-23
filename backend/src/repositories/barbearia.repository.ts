import { db } from '../database/knex.js'
import type { CreateBarbearia, UpdateBarbearia } from '../types/barbearia.js'

class BarbeariaRepository {
    async create(dados: CreateBarbearia) {
        const [registro] = await db('barbearia').insert(dados).returning('*')
        return registro
    }

    async getAll() {
        return db('barbearia').select('*').orderBy('id', 'asc')
    }

    async getById(id: string) {
        const [registro] = await db('barbearia').where({ id }).select('*')
        return registro
    }

    async update(id: string, dados: UpdateBarbearia) {
        const [registro] = await db('barbearia').where({ id }).update(dados).returning('*')
        return registro
    }

    async delete(id: string) {
        const [registro] = await db('barbearia').where({ id }).del().returning('*')
        return registro
    }
}

export const barbeariaRepository = new BarbeariaRepository()
