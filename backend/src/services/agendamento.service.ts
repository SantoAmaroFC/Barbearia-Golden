import { agendamentoRepository } from '../repositories/agendamento.repository.js'
import type { CreateAgendamento, UpdateAgendamento } from '../types/agendamento.js'

class AgendamentoService {
    async create(dados: CreateAgendamento) {
        return agendamentoRepository.create(dados)
    }

    async getAll() {
        return agendamentoRepository.getAll()
    }

    async getById(id: string) {
        return agendamentoRepository.getById(id)
    }

    async update(id: string, dados: UpdateAgendamento) {
        return agendamentoRepository.update(id, dados)
    }

    async delete(id: string) {
        return agendamentoRepository.delete(id)
    }
}

export const agendamentoService = new AgendamentoService()
