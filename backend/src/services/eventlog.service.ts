import { eventlogRepository } from '../repositories/eventlog.repository.js'
import type { CreateEventlog, UpdateEventlog } from '../types/eventlog.js'

class EventlogService {
    async create(dados: CreateEventlog) {
        return eventlogRepository.create(dados)
    }

    async getAll() {
        return eventlogRepository.getAll()
    }

    async getById(id: string) {
        return eventlogRepository.getById(id)
    }

    async update(id: string, dados: UpdateEventlog) {
        return eventlogRepository.update(id, dados)
    }

    async delete(id: string) {
        return eventlogRepository.delete(id)
    }
}

export const eventlogService = new EventlogService()
