import { Store } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Myheader = () => {
  return (
    <nav className='flex  justify-around max-h-14  p-3'>
      <div className='flex '>
        <Store />
        <Link href="/">
          <h1>Mi palomita</h1>
        </Link>
      </div>

      <div className='hidden gap-3 font-thin  md:flex'>
        <p>Ropa</p>
        <p>Accesorios</p>
        <p>Joyeria</p>
        <p>Perfumes</p>
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

export default Myheader
