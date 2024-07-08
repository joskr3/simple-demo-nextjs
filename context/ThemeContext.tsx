'use client'

import React from 'react'
import { createContext, useContext, useState, ReactNode,FC } from 'react';

export enum Theme { 
  Light = 'light',
  Dark = 'dark'
}

interface ThemeContextProps { 
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

interface ThemeProviderProps { 
  children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.Light)
  const value = { theme, setTheme }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => { 
  const context = useContext(ThemeContext)

  if (!context) { 
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
