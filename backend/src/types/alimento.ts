export interface CreateAlimento {
    nome: string
    descricao: string | null
    preco: number | null
    disponivel: boolean
}

export type UpdateAlimento = Partial<CreateAlimento>
export interface Alimento extends CreateAlimento {
    id: string
}
