import React from "react"

const Card = (animal) => {
    return(
        <div>
            <p>El nombre del animal es: {animal.nombre}</p>
            <p>La especie del animal es: {animal.especie}</p>
        </div>
    )
}

export default Card