import express, {response, type Request, type Response} from "express"

const app = express()
const port = 3000

app.use(express.json())



app.listen(port,() => {
    console.log(`API rodando em http://localhost:${port}`);
})