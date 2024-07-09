'use client'

import React, { createContext, useContext, useState, ReactNode, FC } from 'react'

export enum Usuario {
  admin = 'Admin',
  normal = 'Normal'
}

interface ContextoUsuarioProps {
  usuario: Usuario
  setUsuario: (usuario:Usuario) => void
}

interface UsuarioProviderProps {
  children: ReactNode
}

const ContextoUsuario = createContext<ContextoUsuarioProps | undefined>(undefined)

export const ContextoProvider: FC<UsuarioProviderProps> = ({ children }) => {
  const [usuario, setUsuario] = useState<Usuario>(Usuario.normal)
  const value = { usuario,setUsuario }
  const { Provider } = ContextoUsuario

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export const useUsuario = () => {
  const contexto = useContext(ContextoUsuario)

  if (!contexto) {
    throw new Error("usarTema deberia ser usado dentro de un ContextoProvider")
  }
  return contexto
}
