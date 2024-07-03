import CardDetalle from '@/components/custom/cardDetalle'
import ProductoEspecial from '@/components/custom/productoEspecial'
import React from 'react'

const Detalle = () => {
  const images = [{ src: '/aceite.jpg', witdh: 1020 }]

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <ProductoEspecial imagen={images[0]} titulo="Producto del dia" contenido="El producto del dia , es aquel , que al ser el mas comparado de la tienda aparece en esta seccion" descripcion="Producto del dia (desc)" boton={false} />
      <CardDetalle titulo="Producto del dia" contenido="El producto del dia , es aquel , que al ser el mas comparado de la tienda aparece en esta seccion El producto del dia , es aquel , que al ser el mas comparado de la tienda aparece en esta seccion El producto del dia , es aquel , que al ser el mas comparado de la tienda aparece en esta seccion El producto del dia , es aquel , que al ser el mas comparado de la tienda aparece en esta seccion El producto del dia , es aquel , que al ser el mas comparado de la tienda aparece en esta seccion" descripcion="Producto del dia (desc)" />
    </div>
    
  )
}

export default Detalle
