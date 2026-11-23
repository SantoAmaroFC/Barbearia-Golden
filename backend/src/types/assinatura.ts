export interface CreateAssinatura {
    id_cliente: string
    id_plano: string
    data_inicio: string | null
    data_fim: string | null
    status: string | null
}

export type UpdateAssinatura = Partial<CreateAssinatura>
export interface Assinatura extends CreateAssinatura {
    id: string
}
