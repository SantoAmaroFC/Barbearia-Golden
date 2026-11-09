import { FaCut } from "react-icons/fa";

export default function Navbar() {
    return(

            <header className="flex justify-between items-center pt-8 pl-8 pr-8 pb-8 bg-white border-b border-gray-200">
                <div className="flex ">
                <p className="text-yellow-600 pt-1.5">  <FaCut /> </p>
                <p className="text-black-600 font-black text-lg "> BARBEARIA GOLDEN</p>
                </div>
                <div className="flex border border-solid border-yellow-400 p-2 rounded-full  ">
                    <p>FAÇA JA SEU CORTE</p>
                </div>
            </header>
    );
}''