'use client'

import { Carousel } from "nuka-carousel"
import Image from "next/image"
import CustomCarousel from "./components/carousel"

const App = () => {
  return (
    <>
      <CustomCarousel />
      
      <h1 className="m-auto font-light text-pretty text-3xl py-6">Bienvenidos a la mejor bodeguita de gatos </h1>


      <h3 className="font-light text-pretty text-xl py-6">Categoria 1</h3>

      <section className="flex flex-col md:flex-row gap-8 min-w-full">
        <div className=" flex w-full md:w-1/4 gap-5">
          <Carousel showArrows >
            <Image src='/cat.jpg' className='w-1/3' alt='cat1' width={250} height={200} />
            <Image src='/cato.jpg' className='w-1/3' alt='ca2' width={250} height={200} />
            <Image src='/catoa.jpg' className='w-1/3' alt='cat3' width={250} height={200} />
            <Image src='/catoau.jpg' className='w-1/3' alt='cat4' width={250} height={200} />
          </Carousel>
        </div>
        <div className="flex w-full md:w-1/4 gap-5">
          <Carousel showArrows >
            <Image src='/cat.jpg' className='w-1/3' alt='cat1' width={250} height={200} />
            <Image src='/cato.jpg' className='w-1/3' alt='ca2' width={250} height={200} />
            <Image src='/catoa.jpg' className='w-1/3' alt='cat3' width={250} height={200} />
            <Image src='/catoau.jpg' className='w-1/3' alt='cat4' width={250} height={200} />
          </Carousel>
        </div>
        <div className="flex w-full md:w-1/4 gap-5">
          <Carousel showArrows >
            <Image src='/cat.jpg' className='w-1/3' alt='cat1' width={250} height={200} />
            <Image src='/cato.jpg' className='w-1/3' alt='ca2' width={250} height={200} />
            <Image src='/catoa.jpg' className='w-1/3' alt='cat3' width={250} height={200} />
            <Image src='/catoau.jpg' className='w-1/3' alt='cat4' width={250} height={200} />
          </Carousel>
        </div>
        </section>

    </>
  )
}

export default App
