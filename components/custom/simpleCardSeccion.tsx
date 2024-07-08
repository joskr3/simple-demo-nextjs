import React from 'react'

import type image from '@/interfaces/image';
import CardCarousel from './cardCarousel';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Props {
  images: image[]
  clasName?: string
}

const SimpleCardSeccion = ({ images, clasName }: Props) => {
  return (
    <div className={cn('flex gap-4 overflow-x-scroll max-w-full ',clasName)} >
      {
        images.map(({ src, witdh, titulo, descuento, id = 0 }, index) => <Link key={ index} href={`producto/${id}`}>
          <CardCarousel key={index} titulo={titulo || ""} descuento={descuento || 20} src={src} width={witdh as number} />
        </Link>)
      }
    </div>

  )
}



export default SimpleCardSeccion
