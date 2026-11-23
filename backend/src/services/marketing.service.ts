import { marketingRepository } from '../repositories/marketing.repository.js'
import type { CreateMarketing, UpdateMarketing } from '../types/marketing.js'

class MarketingService {
    async create(dados: CreateMarketing) {
        return marketingRepository.create(dados)
    }

    async getAll() {
        return marketingRepository.getAll()
    }

    async getById(id: string) {
        return marketingRepository.getById(id)
    }

    async update(id: string, dados: UpdateMarketing) {
        return marketingRepository.update(id, dados)
    }

    async delete(id: string) {
        return marketingRepository.delete(id)
    }
}

export const marketingService = new MarketingService()
