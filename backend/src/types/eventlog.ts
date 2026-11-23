export interface CreateEventlog {
    descricao: string
}

export type UpdateEventlog = Partial<CreateEventlog>
export interface Eventlog extends CreateEventlog {
    id: string
}
