import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  titulo: string
  src: string
  width:number
  descuento: number
}

const CardCarousel = ({ titulo, src,width, descuento }: Props) => {
  return (
    <Card className="m-3 ">
      <CardHeader>
        <CardTitle>{titulo}</CardTitle>
        <CardDescription>{`${descuento} - descuento` || 50 }</CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ height: '200px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center',maxWidth:'100%' }}>
          <Image
            className='mx-3 rounded-xl h-[200]  relative flex justify-center items-center align-middle'
            alt='imagen'
            src={src || ''}
            width={width || 0}
            height={250}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="modern" className="rounded-md p-3 m-2 justify-center ">
          <Link href="/producto" className='flex gap-2 p-2 '>
            <ShoppingCart />
            <p>
              Agregar al carrito
            </p>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CardCarousel
