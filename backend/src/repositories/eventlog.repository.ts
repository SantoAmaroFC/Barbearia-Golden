import { db } from '../database/knex.js'
import type { CreateEventlog, UpdateEventlog } from '../types/eventlog.js'

class EventlogRepository {
    async create(dados: CreateEventlog) {
        const [registro] = await db('eventlogs').insert(dados).returning('*')
        return registro
    }

    async getAll() {
        return db('eventlogs').select('*').orderBy('id', 'asc')
    }

    async getById(id: string) {
        const [registro] = await db('eventlogs').where({ id }).select('*')
        return registro
    }

    async update(id: string, dados: UpdateEventlog) {
        const [registro] = await db('eventlogs').where({ id }).update(dados).returning('*')
        return registro
    }

    async delete(id: string) {
        const [registro] = await db('eventlogs').where({ id }).del().returning('*')
        return registro
    }
}

export const eventlogRepository = new EventlogRepository()
