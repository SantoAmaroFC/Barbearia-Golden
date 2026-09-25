import { pool } from "../database/connection";
import { Barbeiro, CriarBarbeiro } from "../types/barbeiro";

class BarbeiroService { async getAll(): Promise<Barbeiro[]> {
    const res = await pool.query<Barbeiro>("SELECT * FROM barbeiros")
    return res.rows
} 

async create (dados: CriarBarbeiro): Promise<Barbeiro> {
    const res = await pool.query<Barbeiro>(`INSERT INTO barbeiros ( nome, email, telefone, foto_url descricao, ativo, criado_em, atualizado_em  ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING`,
        [dados.nome, dados.email, dados.telefone, dados.foto_url, dados.descricao, dados.ativo, dados.criado_em, dados.atualizado_em])

        const barbeiro = res.rows[0]

        if(!barbeiro) {
            throw new Error (
                "O banco não retornou o barbeiro cadastrado" );
        }
        return barbeiro
}
}
export const barbeiroService = new BarbeiroService()