'use client'

import { useTheme, Theme } from '@/context/ThemeContext'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'


interface SeccionProps {
  children: React.JSX.Element
  className?: string
}

const MiSeccionFooter = ({ children, className }: SeccionProps) => {
  return (
    <section className={cn('flex flex-col gap-3 font-thin', className)} >
      {children}
    </section>
  )
}

const Footer = () => {

  const { theme } = useTheme()

  return (
    <footer className={cn('flex justify-between inset-x-0 bottom-0  border-t-2 gap-3',
      theme === Theme.Light ? 'bg-white  border-gray-200' : 'border-gray-800 bg-black text-white'
    )}>
      <MiSeccionFooter>
        <Link href="/contacto">
          <p className='text-md md:text-lg font-thin text-gray-400'>
            Contacto: +65 4342 543 543
          </p>
        </Link>
      </MiSeccionFooter>
      <MiSeccionFooter>
        <h1 className='text-md md:text-lg font-thin text-gray-400'>
          Bodeguita La Palomita
        </h1>
      </MiSeccionFooter>
      <MiSeccionFooter>
        <p className='text-md md:text-lg font-thin text-gray-400'>
          ©️ Derechos reservados Bodeguita La Palomita
        </p>
      </MiSeccionFooter>
    </footer>
  )
}

export default Footer
