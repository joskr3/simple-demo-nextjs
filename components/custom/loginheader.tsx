'use client'

import { Store } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
const LoginHeader = () => {

  const router = useRouter()
  const navigateToHome = () => router.push('/')
  return (
    <nav className='flex m-auto justify-between max-h-14  p-3 '>
      <div className='flex '>
        <Store />
        < div className="cursor-pointer"onClick={navigateToHome}>
          <h1>Mi palomita</h1>
        </div>
      </div>

      <div className='flex gap-4 font-thin'>
        <p>
          Login
        </p>
        <p>Register</p>
      </div>
    </nav>
  )
}

export default LoginHeader
