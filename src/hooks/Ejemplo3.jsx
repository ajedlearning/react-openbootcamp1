import React, { useState, useContext } from 'react'

const miContexto = React.createContext(null)
const Componente1 = () => {
    const state = useContext(miContexto);
  return (
    <div>
      <h1>El token es : {state.token}</h1>
      <Componente2></Componente2>
    </div>
  )
}

export const Componente2 = () => {
    const state = useContext(miContexto);
  return <div><h2>La sesion es : {state.sesion}</h2></div>
}



export const MiComponenteConContexto = () => {

    const estadoInicial = {
        token: '1234557',
        sesion: 1,
    }

    const [sessionData, setSessionData] = useState(estadoInicial);

    const actualizarsesion = ()=>{
        setSessionData({
            token: 'huhdjhkhsuk',
            sesion: sessionData.sesion + 1
        })
    }
  return (
    <miContexto.Provider value={sessionData}>
        <h1>Ejemplo de useState y useContext</h1>
        <Componente1></Componente1>
        <button onClick={actualizarsesion}>Actualizar Session</button>
    </miContexto.Provider>
  )
}

