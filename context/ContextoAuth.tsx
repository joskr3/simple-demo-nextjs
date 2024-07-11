'use client'

import { useRouter } from 'next/navigation'
import React, { createContext, useContext, useState, ReactNode, FC, Dispatch, SetStateAction } from 'react'

interface credencialesUsuario {
  usuario: string
  password: string
}

interface ContextoAuthProps {
  usuario: string
  setUsuario: Dispatch<SetStateAction<string>>
  login: (credencialesUsuario:credencialesUsuario) => void
  logout: () => void
  registro: (credencialesUsuario: credencialesUsuario) => void

}

const ContextoAuth = createContext<ContextoAuthProps | undefined>(undefined)

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [usuario, setUsuario] = useState('')
  const router = useRouter()

  const login = (credenciales: credencialesUsuario) => {
    setUsuario(credenciales.usuario)
    router.push("/dashboard")
  }

  const logout = () => {
    setUsuario('')
    router.push("/")
  }

  const registro = (credenciales: credencialesUsuario) => { 
    setUsuario(credenciales.usuario)
    router.push("/dashboard")
  }

  const { Provider } = ContextoAuth

  const value = { usuario, setUsuario, login, logout,registro }

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}


export const useAuth = () => {
  const contexto = useContext(ContextoAuth)
  if (!contexto) {
    throw new Error("useAuth deberia estar dentro del proveedor de Auth")
  }
  return contexto
}

