export interface CreateServico {
    nome: string
    descricao: string | null
    preco: number
    duracao: number | null
}

export type UpdateServico = Partial<CreateServico>
export interface Servico extends CreateServico {
    id: string
}
