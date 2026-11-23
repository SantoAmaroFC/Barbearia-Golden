export interface CreatePlano {
    nome: string
    descricao: string | null
    preco: number
    quantidade_cortes: number | null
}

export type UpdatePlano = Partial<CreatePlano>
export interface Plano extends CreatePlano {
    id: string
}
