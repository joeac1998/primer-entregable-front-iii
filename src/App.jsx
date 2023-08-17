import { useState } from 'react'
import './App.css'
import Form from './components/form'
import Card from './components/card'

function App() {
  
  const [animal, setAnimal] = useState({
    name: '',
    species: ''
  })

const handleSubmit= (e) => {
  e.preventDefault()
  if(animal.nombre.length <= 3 && animal.nombre.trim() == "")
  alert("Por favor chequeá que la información sea correcta")
  else if(animal.species.length <=6)
  alert("Por favor chequeá que la información sea correcta")
  }

  return (
    <>
      <div className= "App">
        <h1>Ingresa un animal y su especie</h1>
        <Form handleSubmit={handleSubmit} setAnimal={setAnimal} />
        <Card animal={animal} />
      </div>
    </>
  )
}






export default App
