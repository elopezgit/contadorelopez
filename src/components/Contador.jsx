import { useState } from "react";


const Contador = () => {

    // aqui va la logica del componente
    //let numero = 10;
    // aqui creo el state
    const [numero,setNumero] = useState(10);

    // const sumar = () =>{
    //     //numero++
    //     setNumero(numero+1)
    // }

    return (
        <section className="text-center">
            {/* zona de maquetado */}
            <h2 >Contador</h2>
            
            <p>{numero}</p>
            <button className="btn btn-primary me-2" onClick={()=>setNumero(numero+1)}>+1</button>
            <button className="btn btn-danger" onClick={()=>setNumero(numero-1)}>-1</button>

        </section>
    );
};

export default Contador;