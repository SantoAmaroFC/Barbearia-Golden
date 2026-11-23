export interface CreateEntretenimento {
    nome: string
    descricao: string | null
    disponivel: boolean
}

export type UpdateEntretenimento = Partial<CreateEntretenimento>
export interface Entretenimento extends CreateEntretenimento {
    id: string
}
