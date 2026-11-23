import { db } from '../database/knex.js'
import type { CreateServico, UpdateServico } from '../types/servico.js'

class ServicoRepository {
    async create(dados: CreateServico) {
        const [registro] = await db('servicos').insert(dados).returning('*')
        return registro
    }

    async getAll() {
        return db('servicos').select('*').orderBy('id', 'asc')
    }

    async getById(id: string) {
        const [registro] = await db('servicos').where({ id }).select('*')
        return registro
    }

    async update(id: string, dados: UpdateServico) {
        const [registro] = await db('servicos').where({ id }).update(dados).returning('*')
        return registro
    }

    async delete(id: string) {
        const [registro] = await db('servicos').where({ id }).del().returning('*')
        return registro
    }
}

export const servicoRepository = new ServicoRepository()
