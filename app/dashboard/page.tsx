'use client'

import RutaProtegida from '@/components/custom/rutaProtegida'
import { useAuth } from '@/context/ContextoAuth'
import React from 'react'

const Dashboard = () => {

  const { usuario } = useAuth()

  console.log("Hola estoy en la vista del dashboard y el usuario es el siguiente", usuario)
  return (
    <RutaProtegida>
      <div>Soy la vista del dashboard</div>
    </RutaProtegida>

  )
}

export default Dashboard
