'use client'

import { Store, Sun, Moon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import MenuHamburguesa from './menuHamburguesa'
import { Theme, useTheme } from '@/context/ThemeContext'
import { Button } from '../ui/button'
import { cn } from "@/lib/utils"

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

  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)
  }

  return (
    <nav className={
      cn(
        "flex justify-between items-center gap-4 p-4",
        theme === Theme.Dark ? "bg-black text-white" : "bg-white text-black"
      )
    }>
      <MenuResponsivo />
      <div className='flex gap-4 font-thin items-center'>
        <Link href='/inicio' className=' text-md md:text-2xl'>
          Login
        </Link>
        <Link href='/registro' className=' text-md md:text-2xl'>
          Registro
        </Link>
        <Button onClick={toggleTheme} variant={theme === Theme.Light ? "outline" : "dark"}>
          {
            theme === Theme.Light ? <Moon /> : <Sun />
          }
        </Button>
      </div>
    </nav>
  )
}

export default Myheader
