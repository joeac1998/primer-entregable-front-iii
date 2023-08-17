import React from "react";

const Form = ({setAnimal, handleSubmit})=> {
    return(
        <form onSubmit={handleSubmit}>
        <label>Nombre del animal:</label>
        <input type="text" onBlur={(e) => setAnimal((prevState) => ({...prevState, name: e.target.value}))}/>
        <label>Especie del animal:</label>
        <input type="text" onBlur={(e) => setAnimal((prevState) => ({...prevState, species: e.target.value}))} />

        <button>Enviar</button>
        </form>
        
    )

}

export default Form
