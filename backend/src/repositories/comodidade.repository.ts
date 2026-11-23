import { db } from '../database/knex.js'
import type { CreateComodidade, UpdateComodidade } from '../types/comodidade.js'

class ComodidadeRepository {
    async create(dados: CreateComodidade) {
        const [registro] = await db('comodidades').insert(dados).returning('*')
        return registro
    }

    async getAll() {
        return db('comodidades').select('*').orderBy('id', 'asc')
    }

    async getById(id: string) {
        const [registro] = await db('comodidades').where({ id }).select('*')
        return registro
    }

    async update(id: string, dados: UpdateComodidade) {
        const [registro] = await db('comodidades').where({ id }).update(dados).returning('*')
        return registro
    }

    async delete(id: string) {
        const [registro] = await db('comodidades').where({ id }).del().returning('*')
        return registro
    }
}

export const comodidadeRepository = new ComodidadeRepository()
