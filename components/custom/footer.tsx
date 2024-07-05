import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'


interface SeccionProps {
  children: React.JSX.Element
  className?:string
}

const MiSeccionFooter = ({children,className}:SeccionProps) => {
  return (
    <section className={cn('flex flex-col gap-3 font-thin',className)} >
      {children}
    </section>
  )
}


const styles = {
  texto: 'text-md md:text-lg font-thin text-gray-400'
}

const Footer = () => {
  return (
    <footer className='flex justify-between inset-x-0 bottom-0 mx-3 mt-3 w-full border-t-2 border-gray-200 p-3 gap-3 '>
      <MiSeccionFooter>
        <Link href="/contacto">
          <p className={styles.texto}>
            Contacto: +65 4342 543 543
          </p>
        </Link>
      </MiSeccionFooter>
      <MiSeccionFooter>
        <h1 className={styles.texto}>
        Bodeguita La Palomita
        </h1>
      </MiSeccionFooter>
      <MiSeccionFooter>
        <p className={styles.texto}>
          ©️ Derechos reservados Bodeguita La Palomita
        </p>
      </MiSeccionFooter>
    </footer>
  )
}

export default Footer
