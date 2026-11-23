import { clienteRepository } from '../repositories/cliente.repository.js'
import type { CreateCliente, UpdateCliente } from '../types/cliente.js'

class ClienteService {
    async create(dados: CreateCliente) {
        return clienteRepository.create(dados)
    }

    async getAll() {
        return clienteRepository.getAll()
    }

    async getById(id: string) {
        return clienteRepository.getById(id)
    }

    async update(id: string, dados: UpdateCliente) {
        return clienteRepository.update(id, dados)
    }

    async delete(id: string) {
        return clienteRepository.delete(id)
    }
}

export const clienteService = new ClienteService()
