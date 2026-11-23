export interface CreateCliente {
    nome: string
    email: string | null
    cpf: string | null
    telefone: string | null
    data_nascimento: string | null
}

export type UpdateCliente = Partial<CreateCliente>
export interface Cliente extends CreateCliente {
    id: string
}
