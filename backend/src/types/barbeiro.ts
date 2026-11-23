export interface CreateBarbeiro {
    nome: string
    telefone: string | null
    especialidade: string | null
    disponivel: boolean
}

export type UpdateBarbeiro = Partial<CreateBarbeiro>
export interface Barbeiro extends CreateBarbeiro {
    id: string
}
