import { db } from '../database/knex.js'
import type { CreateAgendamento, UpdateAgendamento } from '../types/agendamento.js'

class AgendamentoRepository {
    async create(dados: CreateAgendamento) {
        const [registro] = await db('agendamentos').insert(dados).returning('*')
        return registro
    }

    async getAll() {
        return db('agendamentos').select('*').orderBy('id', 'asc')
    }

    async getById(id: string) {
        const [registro] = await db('agendamentos').where({ id }).select('*')
        return registro
    }

    async update(id: string, dados: UpdateAgendamento) {
        const [registro] = await db('agendamentos').where({ id }).update(dados).returning('*')
        return registro
    }

    async delete(id: string) {
        const [registro] = await db('agendamentos').where({ id }).del().returning('*')
        return registro
    }
}

export const agendamentoRepository = new AgendamentoRepository()
