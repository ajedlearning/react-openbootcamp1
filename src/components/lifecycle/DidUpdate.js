/*
Ejemplo del ciclo de vida en componente de clase DidUpdate

*/
import React, { Component, useEffect } from 'react'

export  class DidUpdate extends Component {
    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado')
    }
    render() {
        return (
            <div>DidUpdate</div>
    )
  }
}



/*
Ejemplo del ciclo de vida en componente funcional DidUpdate

*/



export const DidUpdateHook = () => {
    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado, en funcional')
        
    })
    
    return (
        <div>DidUpdate</div>
        )
    }
    