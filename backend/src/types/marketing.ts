export interface CreateMarketing {
    titulo: string | null
    descricao: string | null
    imagem_url: string | null
    data_publicacao: string | null
}

export type UpdateMarketing = Partial<CreateMarketing>
export interface Marketing extends CreateMarketing {
    id: string
}
