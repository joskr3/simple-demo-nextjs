'use client'

import React from 'react'
import { Carousel } from 'nuka-carousel';
import Image from 'next/image';
import type image from '@/interfaces/image';


interface Props {
  images: image[]
  className?:string
}

const CustomNukaCarousel = ({ images,className }: Props) => {
  return (
    <div className={className}>
      <Carousel showArrows >
        {
          images.map((imagen, index) => <Image key={index} alt="productos"
            priority
            className='w-full mx-3 rounded-xl'
            src={imagen.src}
            quality={100}
            width={imagen?.witdh || 1020}
            height={500}
            style={{
              objectFit: 'cover',
            }} />)
        }

      </Carousel>
    </div>
    
  )
}



export default CustomNukaCarousel
