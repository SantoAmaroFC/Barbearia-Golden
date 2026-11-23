export interface CreateBarbearia {
    nome: string
    endereco: string | null
    telefone: string | null
    instagram: string | null
    whatsapp: string | null
    horario_abertura: string | null
    horario_fechamento: string | null
    dias_funcionamento: string | null
}

export type UpdateBarbearia = Partial<CreateBarbearia>
export interface Barbearia extends CreateBarbearia {
    id: string
}
