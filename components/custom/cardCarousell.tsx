import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { ShoppingCart } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

interface Props { 
  imagen: any
  titulo: string
  descuento?: number
}

const CardCarousell = ({ imagen, descuento, titulo }: Props) => {
  return (
    <>
      <Card className="m-3">
        <CardHeader>
          <CardTitle>{titulo}</CardTitle>
          <CardDescription>{`${descuento || 50} % descuento`}</CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ height: '200px', width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Image alt="productos"
              className='mx-3 rounded-xl h-[200] w-full relative flex justify-center items-center align-middle'
              src={imagen.src}
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
    </>
  )
}

export default CardCarousell
