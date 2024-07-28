import {useEffect, useState} from "react"
import axios from "axios"
import "./app.css"
function App() {
  const [criptos, setCriptos] = useState([])
  const API_URL = import.meta.env.VITE_API_URL

  // useEffect(()=>{
  //   fetch(`${API_URL}assets`)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setCriptos(data.data)
  //     }) 
  //     .catch(()=>{
  //       console.error("La petición fallo")
  //     }) 
  //   },[API_URL])

    useEffect(()=>{
      axios.get(`${API_URL}assets`)
        .then((datos) => {
          setCriptos(datos.data.data)
        }) 
        .catch(()=>{
          console.error("La petición fallo")
        }) 
      },[API_URL])

  return (
    <>
    <h1>Criptomonedas</h1>
    <ol>
    { criptos.map(({id, name, price}) =>
      <li key={id}>Nombre: {name} Precio: {price}</li>
    )}
    </ol>
    </>
  )
}

export default App
