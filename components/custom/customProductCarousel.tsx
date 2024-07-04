'use client'

import React from 'react'
import { Carousel } from 'nuka-carousel';
import Image from 'next/image';
import type image from '@/interfaces/image';
import CardCarousell from './cardCarousell';


interface Props {
  images: image[]
  className?: string
}

const CustomProductCarousel = ({ images, className }: Props) => {
  return (
    <div className={className}>
      <Carousel showArrows autoplay >
        {
          images.map((imagen, index) => <CardCarousell key={index} imagen={imagen} titulo='Producto' />)
        }
      </Carousel>
    </div>

  )
}



export default CustomProductCarousel
