export interface CreateComodidade {
    nome: string
    descricao: string | null
    disponivel: boolean
}

export type UpdateComodidade = Partial<CreateComodidade>
export interface Comodidade extends CreateComodidade {
    id: string
}
