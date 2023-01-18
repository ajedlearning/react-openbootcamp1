/*
Ejemplo del ciclo de vida en componente de clase

*/

import React, { Component, useEffect } from 'react'

export class DidMount extends Component {
  componentDidMount() {
    console.log('Comportamiento antes de que el componente sea añadido al DOM')
  }
  render() {
    return (
      <div>
        <h1>DidMount Clase</h1>
      </div>
    )
  }
}

/*
Ejemplo del ciclo de vida en componente funcional

*/

export const DidMountHook = () => {
  useEffect(() => {
    console.log(
      'Comportamiento antes de que el componente sea añadido al DOM. ejemplo funcional',
    )
  }, [])

  return (
    <div>
      <h1>DidMount Funcional</h1>
    </div>
  )
}
