'use client'

import ProductoEspecial from "@/components/custom/productoEspecial";
import CustomCarousel from "../components/custom/carousel";
import CardCarousell from "@/components/custom/cardCarousell";
import mergedData from "@/data/data";
import { useRouter } from "next/navigation";

const App = () => {

    const router = useRouter();
    const handleProductClick = (productId: number) => {
      router.push(`/product/${productId}`);
    };

    return (
      <>
        <CustomCarousel images={mergedData.products} />
        <h1 className="mx-auto font-extralight text-pretty text-3xl  md:text-5xl my-10  py-6 text-center relative  before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] ">Bienvenidos a la mejor bodeguita online </h1>
        <section className="flex flex-col md:flex-row gap-8 mx-auto">
          <div className="flex flex-col m-3 flex-wrap justify-around ">
            <div className="flex flex-col flex-wrap md:flex-row gap-3 max-h-80   m-[0 auto] mb-6">
              <div className="flex flex-col md:flex-row gap-3 m-[0 auto]">
                <div className="flex flex-col gap-3 m-[0 auto]">
                  <h3 className="font-light text-pretty text-2xl py-6  ml-4 ">Las mas vendidas  en verduras</h3>
                  <CustomCarousel images={mergedData.products.slice(4, 9)} className=" flex justify-center " />
                </div>
              </div>
            </div>
            <ProductoEspecial imagen={mergedData.products[0]} titulo="Aceite de olviva" descripcion="El aceite de oliva es un tesoro culinario y un elixir de salud ampliamente reconocido por sus múltiples beneficios. Este oro líquido, extraído de las aceitunas" contenido="El aceite de oliva es un tesoro culinario y un elixir de salud ampliamente reconocido por sus múltiples beneficios. Este oro líquido, extraído de las aceitunas, es una piedra angular de la dieta mediterránea, famosa por promover la longevidad y el bienestar." />
          </div>
        </section>

        <section className="flex flex-col gap-8 mx-auto w-full overflow-x-scroll ">
          <h3 className="font-light text-pretty text-2xl py-6  ml-4 ">Las mas vendidas  en lacteos</h3>
          <div className="flex mx-auto w-full overflow-x-scroll ">
            {
              mergedData.products.slice(14, 17).map((lacteo, index) => (
                <div key={index} onClick={() => handleProductClick(lacteo.id)}>
                  <CardCarousell imagen={lacteo} titulo={lacteo.titulo || ''} />
                </div>
              ))
            }
          </div>
        </section>
        <section className="flex flex-col gap-8 mx-auto w-full overflow-x-scroll ">
          <h3 className="font-light text-pretty text-2xl py-6  ml-4 ">Las mas vendidas  en otros</h3>
          <div className="flex mx-auto w-full overflow-x-scroll ">
            {
              mergedData.products.slice(17, 19).map((otro, index) => (
                <div key={index} onClick={() => handleProductClick(otro.id)}>
                  <CardCarousell imagen={otro} titulo={otro.titulo || ''} />
                </div>
              ))
            }
          </div>
        </section>
        <section className="flex flex-col gap-8 mx-auto w-full overflow-x-scroll ">
          <h3 className="font-light text-pretty text-2xl py-6  ml-4 ">Las mas vendidas  en verduras</h3>
          <div className="flex mx-auto w-full overflow-x-scroll ">
            {
              mergedData.products.slice(19).map((verdura, index) => (
                <div key={index} onClick={() => handleProductClick(verdura.id)}>
                  <CardCarousell imagen={verdura} titulo={verdura.titulo ?? ''} />
                </div>
              ))
            }
          </div>
        </section>
      </>
    );
  };

export default App;
