'use client'

import React, { createContext, useContext, useState, ReactNode, FC } from 'react'

export enum Tema {
  Claro = 'Claro',
  Oscuro = 'Oscuro'
}

interface ContextoTemaProps {
  tema: Tema
  setTema: (tema: Tema) => void
}

interface TemaProviderProps {
  children: ReactNode
}

const ContextoTema = createContext<ContextoTemaProps | undefined>(undefined)

export const ContextoProvider: FC<TemaProviderProps> = ({ children }) => {
  const [tema, setTema] = useState<Tema>(Tema.Claro)
  const value = { tema, setTema }
  const { Provider } = ContextoTema

  return (
    <Provider value={value}>
      {children}
    </Provider>
  )
}

export const useTema = () => {
  const contexto = useContext(ContextoTema)

  if (!contexto) {
    throw new Error("usarTema deberia ser usado dentro de un ContextoProvider")
  }
  return contexto
}
