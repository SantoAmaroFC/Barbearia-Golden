import { Router, type Request, type Response } from "express"
import { barbeiroService } from "../services/barbeiro.service"
import { CriarBarbeiro } from "../types/barbeiro"

export const barbeiroRouter = Router()

barbeiroRouter.get("/", async (_request: Request, response: Response) => {
    try {
       const res = await barbeiroService.getAll()
       return response.json(res) 
    } catch (error) {
        console.error(error);
        return response.status(500).json({
            error: "Erro Interno"
        })
    }
})

