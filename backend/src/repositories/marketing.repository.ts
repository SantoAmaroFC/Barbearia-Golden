import { db } from '../database/knex.js'
import type { CreateMarketing, UpdateMarketing } from '../types/marketing.js'

class MarketingRepository {
    async create(dados: CreateMarketing) {
        const [registro] = await db('marketing').insert(dados).returning('*')
        return registro
    }

    async getAll() {
        return db('marketing').select('*').orderBy('id', 'asc')
    }

    async getById(id: string) {
        const [registro] = await db('marketing').where({ id }).select('*')
        return registro
    }

    async update(id: string, dados: UpdateMarketing) {
        const [registro] = await db('marketing').where({ id }).update(dados).returning('*')
        return registro
    }

    async delete(id: string) {
        const [registro] = await db('marketing').where({ id }).del().returning('*')
        return registro
    }
}

export const marketingRepository = new MarketingRepository()
