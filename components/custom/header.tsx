'use client'

import { Moon, Store, Sun } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import MenuHamburguesa from './menuHamburguesa'
import { Tema, useTema } from '@/context/ContextoTema'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { useAuth } from '@/context/ContextoAuth'

const Myheader = () => {
  const MenuDesktop = () => {
    return (
      <>
        <Link className=' hidden md:flex gap-3 items-center' href='/'>
          <div className='hidden md:block'>
            <Store size={48} />
          </div>
          <h1 className='flex text-xl md:text-3xl text-center my-auto justify-center'>Mi palomita</h1>
        </Link>
        <div className='hidden gap-3 font-thin  md:flex items-center'>
          <Link href='/verduras' className=' text-md md:text-2xl'>
            Verduras
          </Link>
          <Link href='/lacteos' className=' text-md md:text-2xl'>
            Lacteos
          </Link>
          <Link href='/panaderia' className=' text-md md:text-2xl'>
            Panaderia
          </Link>
          <Link href='/otros' className=' text-md md:text-2xl'>
            Otros
          </Link>
        </div>
      </>
    )
  }
  const MenuMobile = () => {
    return (
      <div className='block md:hidden'>
        <MenuHamburguesa />
      </div>
    )
  }
  const MenuResponsivo = () => {
    return (
      <>
        <MenuDesktop />
        <MenuMobile />
      </>
    )
  }

  const { tema, setTema } = useTema()
  const { usuario, logout } = useAuth()
  const cambiarTema = () => {
    setTema(tema === Tema.Claro ? Tema.Oscuro : Tema.Claro)
  }

  const ComponenteSaludo = () => {
    return (
      <div className='flex gap-2 flex-col md:flex-row'>
        <p className='text-md md:text-2xl font-thin'>Hola {usuario}</p>
        <Button onClick={logout} variant={tema === Tema.Claro ? "ghost" : "dark"} >
          {
            <p className='text-md md:text-2xl font-thin'>Salir</p>
          }
        </Button>
        <Button onClick={cambiarTema} variant={tema === Tema.Claro ? "ghost" : "dark"} >
          {
            tema === Tema.Claro ? <Moon /> : <Sun />
          }
        </Button>
      </div>
    )
  }

  return (
    <nav className={cn("flex justify-between items-center gap-4 p-4 sticky inset-x-0 top-0 z-10", tema === Tema.Oscuro ? "bg-black text-white" : "bg-white text-black")} >
      <MenuResponsivo />
      {
        usuario ? <ComponenteSaludo /> : (
          <div className='flex gap-4 font-thin items-center'>
            <Link href='/inicio' className=' text-md md:text-2xl'>
              Login
            </Link>
            <Link href='/registro' className=' text-md md:text-2xl'>
              Registro
            </Link>
            <Button onClick={cambiarTema} variant={tema === Tema.Claro ? "ghost" : "dark"} >
              {
                tema === Tema.Claro ? <Moon /> : <Sun />
              }
            </Button>
          </div>
        )
      }
    </nav>
  )
}

export default Myheader
