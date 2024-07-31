import {useEffect, useState} from "react"
import axios from "axios"
import "./app.css"
import "./link.css";

import Link from "./Link"
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
          // IMPORTANTE 
          console.log(`${API_URL}assets`)
          console.log(datos)
          setCriptos(datos.data.data) // El restulado de la api lo guardamos en el estado Cripts
        }) 
        .catch(()=>{
          console.error("La petición fallo")
        }) 
      },[API_URL])

  return (
    <>
    <h1>Criptomonedas V4.1</h1>
    <div className="tabla">
      <h2>ID3</h2>
      <h2>Name</h2>
      <h2>Price</h2>
    </div>
    <ol className="cuadricula">
    { criptos.map(({id, name, priceUsd}) =>( // Accedemos a criptos que contiene los datos del resultado
    <Link key={id} id={id} name={name} priceUsd={priceUsd} /> ))}
    </ol>
    </>
  )
}

export default App
