import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-between inset-x-0 bottom-0 mx-3 mt-3 w-full border-t-2 border-gray-200 p-3  gap-3'>
      <section className='flex flex-col gap-3 font-thin'>
        <Link href='/contacto'>
          <p className='text-md md:text-lg font-thin text-gray-400'>
            Contacto: +57 300 123 4567
          </p>
        </Link>
      </section>
      <section>
        <h1 className='text-md md:text-lg font-thin text-gray-400 hidden md:block'>
          Bodeguita La Palomita
        </h1>
      </section>
      <section>
        <p className='text-md md:text-lg font-thin text-gray-400'>
          ©️ Derechos reservados Bodeguita La Palomita
        </p>
      </section>
    </footer>
  )
}

export default Footer
