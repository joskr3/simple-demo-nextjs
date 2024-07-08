'use client'

import React from 'react';
import ProductoEspecial from '@/components/custom/productoEspecial';
import data from '@/data/data';
import type image from '@/interfaces/image';

interface ParametrosProps {
  parametros:image[]
}

interface ProductDetailProps {
  params: ParametrosProps
}

const ProductDetail = ({ params }: ProductDetailProps) => {
  const { parametros } = params
  
  console.log(parametros[0], "PARAMETROS", typeof (parametros))
  console.log(parametros[1], "PARAMETROS", typeof (parametros))

  const product = data.products.find((p: { id: number }) => p.id === +parametros[0] as number);
  console.log(product, "PRODUCTO")
  
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container mx-auto my-10">
      <ProductoEspecial
        imagen={{ src: product?.src, witdh: 1020 }}
        titulo={product?.titulo as string}
        descripcion={product?.descripcion as string}
        contenido={product?.descripcion as string}
        boton={true} />
    </div>
  );
};

export default ProductDetail;
