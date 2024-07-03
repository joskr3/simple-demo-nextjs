import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-between  min-h-36 inset-x-0 bottom-0 mx-3 mt-6 '>
      <section className='flex flex-col gap-3 font-thin'>
        <a href='/'>
          Inicio
        </a>
        <a href='login'>
          Login
        </a>
        <a href='registro'>
          Registro
        </a>
      </section>
      <section>
        <p className='text-sm font-thin text-gray-400 max-w-28'>
          ©️ Derechos reservados Bodeguita La Palomita
        </p>
      </section>
    </footer>
  )
}

export default Footer
