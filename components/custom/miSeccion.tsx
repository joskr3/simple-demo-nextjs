import { cn } from '@/lib/utils'
import React from 'react'


interface SeccionProps {
  children?: React.JSX.Element
  className?: string
  titulo?: string
}

const MiSeccion = ({ children, titulo, className }: SeccionProps) => {
  return (
    <section className={cn('flex flex-col md:flex-row gap-8 mx-auto max-w-full justify-center', className)} >
      <div className="flex flex-col">
        <h3 className="font-light text-pretty  text-2xl md:text-5xl py-6 ml-4">
          {titulo}
        </h3>
        {children}
      </div>
    </section>
  )
}

export default MiSeccion
