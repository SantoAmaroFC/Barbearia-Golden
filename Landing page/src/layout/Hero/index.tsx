

export default function Hero() {
    return(

        <div className="flex   ">
            <div className="flex items-center flex-col pt-100 pl-50 ">
                <h1 className="font-black text-5xl text-yellow-400">BARBEARIA GOLDEN E TRADIÇÂO</h1>
                <div>
                    <p className="flex font-black text-">Tradição e modernidade em um espaço completo dedicado ao seu estilo e bem-estar</p>
                </div>
                <div className="flex gap-5 ">
                    <a href="" className="text-2xl bg-yellow-400 text-black font-black px-2 py-2 hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 animate-pulse  ">Agendar Horario</a>
                <a href="" className="text-2xl  bg-yellow-400 text-black font-black px-2 py-2">Nosso Serviço</a>
                </div>
            </div>
            

            <section className="flex ml-auto w-122 ">
               <img src="/Corte.png" alt="Descrição da imagem" />

            </section>
        </div>
    )
}