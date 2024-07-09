'use client'

import React from 'react';
import ProductoEspecial from '@/components/custom/productoEspecial';
import data from '@/data/data';
import type image from '@/interfaces/image';
import { Tema, useTema } from '@/context/ContextoTema';
import { cn } from '@/lib/utils';

interface ParametrosProps {
  parametros: image[]
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

  const { tema } = useTema()

  return (
    <div className={cn("flex justify-center min-h-dvh", tema === Tema.Claro ? "bg-white text-black" : "bg-black text-white")}>
      <ProductoEspecial
        imagen={{ src: product?.src, witdh: 1020 }}
        titulo={product?.titulo as string}
        descripcion={product?.descripcion as string}
        contenido={product?.descripcion as string}
        boton={true}
      />
    </div>
  );
};

export default ProductDetail;
