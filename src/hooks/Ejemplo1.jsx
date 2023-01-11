import React, {useState} from 'react'

const Ejemplo1 = () => {

    // valor inicial para un contador 
    const valorInicial = 0;


    //Valor inicial para una persona

    const personaInicial = {
        nombre: 'Martin',
        email: 'martin@hotmail.com',
    }

    const [contador, setContador] = useState(valorInicial);
 const [persona, setPersona] = useState(personaInicial);


 /**
  funcion para actualizar el estado privado que contiene el contador 
 */
 const incrementarContador =()=>{
    setContador(contador +1);
 }
 const resetAll =()=>{
    setContador(valorInicial);
    setPersona(personaInicial);
 }
 const actualizarPersona =()=>{
    setPersona({
        nombre: "Arnaldo",
        email: "aespinoza@gamil.com",

    });
 }

  return (
    <div>
        <h1>Ejemplo de useState, hooks</h1>
        <h2>Contador: {contador}</h2>
        <h2>Datos de la persona</h2>
        <h3>Nombre: {persona.nombre}</h3>
        <h3>Nombre: {persona.email}</h3>
        <button onClick={incrementarContador}>Incrementar contador</button>
        <button onClick={actualizarPersona}>Actualizar  persona</button>
        <button onClick={resetAll}>Reset</button>
    </div>
  )
}

export default Ejemplo1