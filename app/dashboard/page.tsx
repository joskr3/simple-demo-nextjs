'use client'

import { useAutenticacion } from '@/context/ContextoAuntenticacion'
import React from 'react'

const Dashboard = () => {

  const { user } = useAutenticacion()
  
  console.log(user,"DASHBOARD PAGE")

  return (
    <div>Dashboard Page!!!</div>
  )
}

export default Dashboard
