import { db } from '../database/knex.js'
import type { CreateAssinatura, UpdateAssinatura } from '../types/assinatura.js'

class AssinaturaRepository {
    async create(dados: CreateAssinatura) {
        const [registro] = await db('assinaturas').insert(dados).returning('*')
        return registro
    }

    async getAll() {
        return db('assinaturas').select('*').orderBy('id', 'asc')
    }

    async getById(id: string) {
        const [registro] = await db('assinaturas').where({ id }).select('*')
        return registro
    }

    async update(id: string, dados: UpdateAssinatura) {
        const [registro] = await db('assinaturas').where({ id }).update(dados).returning('*')
        return registro
    }

    async delete(id: string) {
        const [registro] = await db('assinaturas').where({ id }).del().returning('*')
        return registro
    }
}

export const assinaturaRepository = new AssinaturaRepository()
