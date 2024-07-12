'use client'

import ProductoEspecial from "@/components/custom/productoEspecial"
import CustomNukaCarousel from "../components/custom/customNukaCarousel"
import productos from "@/data/data"
import { cn } from "@/lib/utils"
import SimpleCardSeccion from "@/components/custom/simpleCardSeccion"
import { Tema, useTema } from "@/context/ContextoTema"
import ListPaginada from "@/components/custom/listPaginada"
import MiSeccion from "@/components/custom/miSeccion"

const App = () => {

  const { tema } = useTema()

  const todosLosProductos = productos.products
  const heroProductos = productos.products.slice(5, 14)
  const productosDetalle = productos.products[0]
  const productoslacteos = productos.products.slice(14, 17)
  const productosOtros = productos.products.slice(17, 19)
  const productosVerduras = productos.products.slice(19)

  const estilos = {
    Oscuro: {
      tituloHero: "mx-auto font-extralight text-pretty text-3xl  md:text-5xl my-10  py-6 text-center relative  before:absolute before:inset-0 before:animate-typewriter before:bg-black before:text-white after:absolute after:inset-0 after:w-[0.125em]"
    },
    Claro: {
      tituloHero: "mx-auto font-extralight text-pretty text-3xl  md:text-5xl my-10  py-6 text-center relative  before:absolute before:inset-0 before:animate-typewriter before:bg-white before:text-black after:absolute after:inset-0 after:w-[0.125em]"
    }
  }

  return (
    <main className={cn("flex flex-col gap-4", tema === Tema.Oscuro ? "bg-black text-white" : "bg-white text-black")}>
      <MiSeccion>
        <CustomNukaCarousel images={todosLosProductos} />
      </MiSeccion>
      <MiSeccion>
        <>
          <h1 className={cn(estilos[tema].tituloHero
            , "font-mono")}>
            Bienvenidos a la mejor bodeguita online
          </h1>
          <ListPaginada />
        </>
      </MiSeccion>
      <MiSeccion titulo="Los mas vendidos">
        <CustomNukaCarousel images={heroProductos} />
      </MiSeccion>
      <div className=" flex flex-col md:flex-row gap-4 ">
        <MiSeccion >
          <div>
            <ProductoEspecial imagen={productosDetalle} titulo={productosDetalle.titulo as string} descripcion={productosDetalle.descripcion as string} contenido={productosDetalle.descripcion as string} boton={true} />
            <MiSeccion titulo="Otros">
              <SimpleCardSeccion images={productosOtros} />
            </MiSeccion>
          </div>
        </MiSeccion>
        <div className="flex flex-wrap flex-col">
          <MiSeccion titulo="Lacteos">
            <SimpleCardSeccion images={productoslacteos} />
          </MiSeccion>
          <MiSeccion titulo="Panaderia">
            <SimpleCardSeccion images={productosOtros} />
          </MiSeccion>
          <MiSeccion titulo="Panaderia">
            <SimpleCardSeccion images={productosOtros} />
          </MiSeccion>
        </div>
      </div>
      <MiSeccion titulo="Los mas vendidos">
        <SimpleCardSeccion images={productosVerduras} />
      </MiSeccion>
    </main>
  )
}

export default App
