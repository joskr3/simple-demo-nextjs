import { Store } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Myheader = () => {
  return (
    <nav className='flex justify-between h-12 md:h-20  p-3 mx-2 sticky top-0 z-10 bg-white w-full'>
      <div className='flex gap-3 items-center'>
        <div className="block md:hidden">
          <Store size={24} />
        </div>
        <div className="hidden md:block">
          <Store size={48} />
        </div>
      
        <Link href="/">
          <h1 className='flex text-xl md:text-2xl text-center my-auto justify-center'>Mi palomita</h1>
        </Link>
      </div>

      <div className='hidden gap-3 font-thin  md:flex items-center '>
        <Link href='/verduras' className='text-md md:text-2xl' >
          Verduras
        </Link>
        <Link href='/lacteos' className='text-md md:text-2xl' >
          Lacteos
        </Link>
        <Link href='/panaderia' className='text-md md:text-2xl' >
          Panaderia
        </Link>
        <Link href='/otros' className='text-md md:text-2xl'>
          Otros
        </Link>
      </div>

      <div className='flex gap-4 font-thin items-center'>
        <Link href='/login' className='text-md md:text-2xl'>
          Login
        </Link>
        <Link href='/registro' className='text-md md:text-2xl'>
          Registro
        </Link>
      </div>
    </nav>
  )
}

export default Myheader
