'use client'

import React from 'react';
import ProductoEspecial from '@/components/custom/productoEspecial';
import data from '@/data/data';

interface ProductDetailProps {
  params: {
    id: string;
  };
  searchParams: URLSearchParams;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ params: { id }, searchParams }) => {
  console.log(searchParams)
  console.log(id)
  const product = data.products.find((p: { id: number }) => p.id === parseInt(id as string));
console.log(product)
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container mx-auto my-10">
      <ProductoEspecial
        imagen={{ src: product.src, witdh: 1020 }}
        titulo={product?.titulo || 'Título predeterminado'}
        descripcion={product?.descripcion || 'Descripción predeterminada'}
        contenido={`Precio: $${product.descuento || 0}`}
        boton={true}
      />
    </div>
  );
};

export default ProductDetail;
