//el componente va a contener un formulario para autenticación de usuario

import React, { useState } from 'react'

export const LoginForm = () => {
  const initialCredential = [
    {
      user: '',
      password: '',
    },
  ]

  const [credentials, setCredentials] = useState(initialCredential)

  return <div>LoginForm</div>
}
