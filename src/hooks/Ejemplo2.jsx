//Ejemplo del uso de hook useEffet u useState
import React, { useState, useRef, useEffect } from 'react'

const Ejemplo2 = (props) => {
  //vamos a crear dos contadores distintos
  //cada uno en un estado diferente

  const [contador1, setContador1] = useState(0)
  const [contador2, setContador2] = useState(0)

  // vamos a crear una referencia para asociar una variable a un elemento de DOM

  const myRef = useRef()

  const incrementar1 = () => {
    setContador1(contador1 + 1)
  }

  const incrementar2 = () => {
    setContador2(contador2 + 1)
  }

  //trabando con useEffect
  useEffect(() => {
    console.log('cambio en el estado del componente')
    console.log('mostrando referencia al elemento del DOM:')
    console.log(myRef)
    
  },[contador2])
 
  return (
    <div>
      <h1>Ejemplo de useState, useRef, useEffect, hooks</h1>
      <h2>Contador1: {contador1}</h2>
      <h2>Contador2: {contador2}</h2>

      {/* colocando elemento referenciado */}

      <h4 ref={myRef}>Ejemplo de elemento referenciados</h4>
        <div>
            <button onClick={incrementar1}>Incrementar 1</button>
            <button onClick={incrementar2}>Incrementar 2</button>
        </div>
    </div>
  )
}

export default Ejemplo2
