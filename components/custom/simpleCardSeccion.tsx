import React from 'react'

import type image from '@/interfaces/image';
import CardCarousel from './cardCarousel';
import Link from 'next/link';


interface Props {
  images: image[]
}

const SimpleCardSeccion = ({ images }: Props) => {
  return (
    <div className='flex gap-4 overflow-x-scroll'>
      {
        images.map(({ src, witdh, titulo, descuento, id = 0 }, index) => <Link href={`producto/${id}`}>
          <CardCarousel key={index} titulo={titulo || ""} descuento={descuento || 20} src={src} width={witdh as number} />
        </Link>)
      }
    </div>

  )
}



export default SimpleCardSeccion
