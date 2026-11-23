import { db } from '../database/knex.js'
import type { CreateCliente, UpdateCliente } from '../types/cliente.js'

class ClienteRepository {
    async create(dados: CreateCliente) {
        const [registro] = await db('clientes').insert(dados).returning('*')
        return registro
    }

    async getAll() {
        return db('clientes').select('*').orderBy('id', 'asc')
    }

    async getById(id: string) {
        const [registro] = await db('clientes').where({ id }).select('*')
        return registro
    }

    async update(id: string, dados: UpdateCliente) {
        const [registro] = await db('clientes').where({ id }).update(dados).returning('*')
        return registro
    }

    async delete(id: string) {
        const [registro] = await db('clientes').where({ id }).del().returning('*')
        return registro
    }
}

export const clienteRepository = new ClienteRepository()
