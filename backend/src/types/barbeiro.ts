export interface Barbeiro {
    id: string
    nome:string
    email: string
    telefone: number
    foto_url: string
    descricao: string
    ativo: string
    criado_em: number
    atualizado_em: number

}

export interface CriarBarbeiro {
    nome: string
    email: string
    telefone: number
    foto_url: string
    descricao: string
    ativo: string
    criado_em: number
    atualizado_em: number

}