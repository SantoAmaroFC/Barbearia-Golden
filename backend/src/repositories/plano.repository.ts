import { db } from '../database/knex.js'
import type { CreatePlano, UpdatePlano } from '../types/plano.js'

class PlanoRepository {
    async create(dados: CreatePlano) {
        const [registro] = await db('planos').insert(dados).returning('*')
        return registro
    }

    async getAll() {
        return db('planos').select('*').orderBy('id', 'asc')
    }

    async getById(id: string) {
        const [registro] = await db('planos').where({ id }).select('*')
        return registro
    }

    async update(id: string, dados: UpdatePlano) {
        const [registro] = await db('planos').where({ id }).update(dados).returning('*')
        return registro
    }

    async delete(id: string) {
        const [registro] = await db('planos').where({ id }).del().returning('*')
        return registro
    }
}

export const planoRepository = new PlanoRepository()
