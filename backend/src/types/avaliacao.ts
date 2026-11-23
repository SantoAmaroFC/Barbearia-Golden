export interface CreateAvaliacao {
    id_cliente: string
    id_barbeiro: string
    nota: number
    comentario: string | null
}

export type UpdateAvaliacao = Partial<CreateAvaliacao>
export interface Avaliacao extends CreateAvaliacao {
    id: string
}
