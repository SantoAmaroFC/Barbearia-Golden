export interface CreatePagamento {
    id_cliente: string
    valor: number
    forma_pagamento: string | null
    status: string | null
}

export type UpdatePagamento = Partial<CreatePagamento>
export interface Pagamento extends CreatePagamento {
    id: string
}
