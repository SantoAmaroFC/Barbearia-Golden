import express from 'express'
import cors from 'cors'
import { clientesRouter } from './routes/clientes.route.js'
import { barbeirosRouter } from './routes/barbeiros.route.js'
import { servicosRouter } from './routes/servicos.route.js'
import { agendamentosRouter } from './routes/agendamentos.route.js'
import { planosRouter } from './routes/planos.route.js'
import { assinaturasRouter } from './routes/assinaturas.route.js'
import { marketingRouter } from './routes/marketing.route.js'
import { avaliacoesRouter } from './routes/avaliacoes.route.js'
import { alimentosRouter } from './routes/alimentos.route.js'
import { entretenimentosRouter } from './routes/entretenimentos.route.js'
import { pagamentosRouter } from './routes/pagamentos.route.js'
import { comodidadesRouter } from './routes/comodidades.route.js'
import { barbeariaRouter } from './routes/barbearia.route.js'
import { eventlogsRouter } from './routes/eventlogs.route.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use('/clientes', clientesRouter)
app.use('/barbeiros', barbeirosRouter)
app.use('/servicos', servicosRouter)
app.use('/agendamentos', agendamentosRouter)
app.use('/planos', planosRouter)
app.use('/assinaturas', assinaturasRouter)
app.use('/marketing', marketingRouter)
app.use('/avaliacoes', avaliacoesRouter)
app.use('/alimentos', alimentosRouter)
app.use('/entretenimentos', entretenimentosRouter)
app.use('/pagamentos', pagamentosRouter)
app.use('/comodidades', comodidadesRouter)
app.use('/barbearia', barbeariaRouter)
app.use('/eventlogs', eventlogsRouter)

app.listen(port, () => {
    console.log(`API Barbearia Brilho Premium funcionando em http://localhost:${port}`)
})
