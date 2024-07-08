'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import type image from '@/interfaces/image'
import Image from "next/image"
import React from 'react'
import { Button } from "../ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface Props {
  imagen: image
  titulo: string
  descripcion: string,
  contenido: string
  className?: string
  boton?: boolean
}

const ProductoEspecial = ({ imagen, titulo, descripcion, contenido, boton }: Props) => {

  const router = useRouter()


  const mostrarBoton = (boton = false) => {
    if (boton) {
      return (
        <Button asChild variant="modern" className="rounded-md p-3 m-2 justify-center ">
          <Link href="/producto">Comprar</Link>
        </Button>
      )
    } else {
      return null
    }
  }

  return (
    <button className="cursor-pointer max-w-full" type="button" onClick={() => router.push(`/producto/${imagen.id}`)}>
      <Card className="m-3" >
        <CardHeader>
          <CardTitle>{titulo}</CardTitle>
          <CardDescription>{descripcion}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={imagen.src} alt="imagen" width={imagen.witdh} className="rounded-md p-3 m-2" height={250} />
          <p className="text-pretty p-3 m-2">{contenido}</p>
        </CardContent>
        <CardFooter>
          {
            mostrarBoton(boton)
          }
        </CardFooter>
      </Card>
    </button>
  )
}

export default ProductoEspecial
