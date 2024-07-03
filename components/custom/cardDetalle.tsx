import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'
import Link from 'next/link'


interface Props {
  titulo: string
  descripcion: string
  contenido: string
}

const CardDetalle = ({ titulo, descripcion, contenido }: Props) => {
  return (
    <Card className="m-3">
      <CardHeader>
        <CardTitle>{titulo}</CardTitle>
        <CardDescription>{descripcion}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-pretty p-3 m-2">{contenido}</p>
        <p className="text-pretty p-3 m-2">{contenido}</p>
        <p className="text-pretty p-3 m-2">{contenido}</p>
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

export default CardDetalle
