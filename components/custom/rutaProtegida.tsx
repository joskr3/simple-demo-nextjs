'use client'

import { useAuth } from '@/context/ContextoAuth'
import { useRouter } from 'next/navigation'
import React, { ReactNode, FC, useEffect } from 'react'


interface RutaProtegidaProps {
  children: ReactNode
}

const RutaProtegida: FC<RutaProtegidaProps> = ({ children }) => {
  const { usuario } = useAuth()
  const router = useRouter()

  useEffect(() => {
    !usuario && router.push("/inicio")
  }, [usuario, router])

  if (!usuario) {
    return null
  }

  return (
    <>
      {children}
    </>
  )
}

export default RutaProtegida
