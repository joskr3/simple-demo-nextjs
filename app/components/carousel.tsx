'use client'

import React from 'react'
import { Carousel } from 'nuka-carousel';
import Image from 'next/image';

const CustomCarousel = () => {
  return (
    <Carousel showArrows >
      <Image src='/cat.jpg' className='roudend-full w-10/12'  alt='cat1' width={1020} height={500} />
      <Image src='/cato.jpg' className='roudend-full w-10/12' alt='ca2' width={1020} height={500} />
      <Image src='/catoa.jpg' className='roudend-full w-10/12' alt='cat3' width={1020} height={500} />
      <Image src='/catoau.jpg' className='roudend-full w-10/12' alt='cat4' width={1020} height={500} />
    </Carousel>
  )
}

export default CustomCarousel
