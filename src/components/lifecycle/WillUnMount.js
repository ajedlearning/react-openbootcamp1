/*
ejemplo de uso del metodo compenent willUnMount en clased
*/

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {
  componentWillUnmount() {
    console.log('Compontamiento antes de que el componente desaparezca')
  }
  render() {
    return (
      <div>
        <h1>WillUnMount en clases</h1>
      </div>
    )
  }
}

/*
ejemplo de uso del metodo compenent willUnMount en funcional
*/

export const WillUnMountHook = () => {
  useEffect(() => {
    //

    return () => {
      console.log('Compontamiento antes de que el componente desaparezca')
    }
  }, [])

  return (
    <div>
      <h1>WillUnMount en funcional</h1>
    </div>
  )
}
