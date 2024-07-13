'use client'

import { useAuth } from '@/context/ContextoAuth'
import { useRouter } from 'next/navigation'
import React, { ReactNode, FC, useEffect } from 'react'
import { useUser } from "@clerk/clerk-react";


interface RutaProtegidaProps {
  children: ReactNode
}

const RutaProtegida: FC<RutaProtegidaProps> = ({ children }) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { usuario } = useAuth()
  const router = useRouter()

  useEffect(() => {
    !user && router.push("/inicio")
  }, [user, router])

  if (!user) {
    return null
  }

  return (
    <>
      {children}
    </>
  )
}

export default RutaProtegida
