'use client'

import React, { createContext, useContext, useState, ReactNode, FC } from 'react'
import { useRouter } from 'next/navigation'

// enum Usuario {
//   Admin = 'admin',
//   Usuario = 'usuario'
// }

interface credencialesUsuario { 
  user: string
  password: string
}

interface ContextoAutenticacionType{
  user: string
  setUsuario: React.Dispatch<React.SetStateAction<string>>
  login: (credenciales: credencialesUsuario) => void
  logout: () => void
}


const ContextoAutenticacion = createContext<ContextoAutenticacionType | undefined>(undefined)

export const AutenticacionProvider: FC<{ children: ReactNode }> = ({ children }) => { 
  const [user, setUsuario] = useState<string>('')
  const router = useRouter()

  const login = (credenciales: credencialesUsuario) => { 
    setUsuario(credenciales.user)
    router.push('/dashboard')
  }

  const logout = () => { 
    setUsuario('')
    router.push('/')
  }

  return (
    <ContextoAutenticacion.Provider value={{ user, setUsuario, login, logout }}>
      {children}
    </ContextoAutenticacion.Provider>
  )
}

export const useAutenticacion = () => { 
  const contexto = useContext(ContextoAutenticacion)
  if (!contexto) { 
    throw new Error('useAutenticacion debe estar dentro del proveedor de Autenticacion')
  }
  return contexto
}

