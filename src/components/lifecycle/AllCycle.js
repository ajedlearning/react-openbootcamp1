import React, { useEffect } from 'react'

export default function AllCycle() {
  useEffect(() => {
    console.log('Componente creado')

    const intervalID = setInterval(() => {
      document.title = `${new Date()}`
      console.log('actualizacion del componente')
    }, 1000)

    return () => {
      console.log('componente va a desaparecer')
      document.title = `tiempo detenido`
      clearInterval(intervalID)
    }
  }, [])

  return <div>AllCycle</div>
}
