
const Contador = () => {

    // aqui va la logica del componente
    let numero = 10;

    const sumar = () =>{
        numero++
        console.log(numero);
    }

    return (
        <section className="text-center">
            {/* zona de maquetado */}
            <h2 >Contador</h2>
            
            <p>{numero}</p>
            <button className="btn btn-primary me-2" onClick={sumar}>+1</button>
            <button className="btn btn-danger">-1</button>

        </section>
    );
};

export default Contador;