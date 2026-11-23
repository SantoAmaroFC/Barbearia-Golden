export interface CreateAgendamento {
    id_cliente: string
    id_barbeiro: string
    id_servico: string
    data: string
    horario: string
    status: string
}

export type UpdateAgendamento = Partial<CreateAgendamento>
export interface Agendamento extends CreateAgendamento {
    id: string
}
