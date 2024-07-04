import { Store } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Myheader = () => {
  return (
    <nav className='flex justify-between h-12 md:h-20  p-3 mx-2'>
      <div className='flex gap-3 items-center'>
        <Store size={48} />
        <Link href="/">
          <h1 className='flex text-3xl text-center my-auto justify-center'>Mi palomita</h1>
        </Link>
      </div>

      <div className='hidden gap-3 font-thin  md:flex items-center'>
        <Link href='/verduras' className='text-2xl'>
          Verduras
        </Link>
        <Link href='/lacteos' className='text-2xl'>
          Lacteos
        </Link>
        <Link href='/panaderia' className='text-2xl'>
          Panaderia
        </Link>
        <Link href='/otros' className='text-2xl'>
          Otros
        </Link>
      </div>

      <div className='flex gap-4 font-thin items-center'>
        <Link href='/login' className='text-2xl'>
          Login
        </Link>
        <Link href='/registro' className='text-2xl'>
          Registro
        </Link>
      </div>
    </nav>
  )
}

export default Myheader
