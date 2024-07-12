'use client'

import React, { FC, ChangeEvent, useState } from 'react'
import productos from '@/data/data'
import { Button } from '../ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { Input } from '../ui/input'
import image from '@/interfaces/image'
import useDelate from '@/hooks/useDelate'
import SimpleCardSeccion from './simpleCardSeccion'
import MiSeccion from './miSeccion'

const ListPaginada: FC = () => {
  const [terminoBusqueda, setTerminoBusqueda] = useState<string>('')
  const [categoriaActual, setCategoriaActual] = useState<string>('')
  const [paginaActual, setPaginaActual] = useState<number>(1)
  
  const itemsPorPagina = 3
  const items: image[] = productos.products
  const busquedaDemorada = useDelate(terminoBusqueda, 1000)

  const handleCambioBusqueda = (event: ChangeEvent<HTMLInputElement>) => {
    setTerminoBusqueda(event.target.value)
    setPaginaActual(1)
  }

  const handleCambioCategoria = (categoria: string) => {
    setCategoriaActual(categoria)
    setPaginaActual(1)
  }

  const productosFiltrados = items.filter(({ titulo, descripcion, categoria }) => (
    titulo?.toLowerCase().includes(busquedaDemorada.toLowerCase()) ||
    (descripcion?.toLowerCase().includes(busquedaDemorada.toLowerCase()))
  ) && (categoriaActual === '' || categoria?.toLowerCase() === categoriaActual.toLowerCase()))


  const indexUltimoItem = paginaActual * itemsPorPagina
  const indexPrimerItem = indexUltimoItem - itemsPorPagina
  const itemsActuales = productosFiltrados.slice(indexPrimerItem, indexUltimoItem)

  const totalPaginas = Math.ceil(productosFiltrados.length / itemsPorPagina)

  const handleCambioPagina = (numeroPagina: number) => {
    setPaginaActual(numeroPagina)
  }

  const handlePaginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1)
    }
  }

  const handlePaginaSiguiente = () => {
    if (paginaActual < totalPaginas) {
      setPaginaActual(paginaActual + 1)
    }
  }

  const Botones = () => {
    return (
      <div className='flex justify-center items-center m-4'>
        <Button onClick={handlePaginaAnterior} variant="ghost">
          Anterior
        </Button>
        {
          Array.from({ length: totalPaginas }, (_, index) => (
            <Button key={index} onClick={() => handleCambioPagina(index + 1)} variant="ghost">
              {index + 1}
            </Button>
          ))
        }
        <Button onClick={handlePaginaSiguiente} variant="ghost">
          Siguiente
        </Button>
      </div>
    )
  }

  return (
    <div className='text-center'>
        <Input
          type='text'
          placeholder='Buscar...'
          value={terminoBusqueda}
          onChange={handleCambioBusqueda}
        />
      <MiSeccion>
        <Select onValueChange={(value: string) => handleCambioCategoria(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Selecciona una categoria" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Productos</SelectLabel>
              <SelectItem value="Verduras">Verduras</SelectItem>
              <SelectItem value="Lacteos">Lacteos</SelectItem>
              <SelectItem value="Panaderia">Panaderia</SelectItem>
              <SelectItem value="Aceites">Aceites</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </MiSeccion>
      <MiSeccion>
        <>
          <SimpleCardSeccion images={itemsActuales} />
          <Botones />
        </>
      </MiSeccion>
    </div>
  )
}

export default ListPaginada
