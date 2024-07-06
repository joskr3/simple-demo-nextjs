import ProductoEspecial from "@/components/custom/productoEspecial"
import CustomNukaCarousel from "../components/custom/customNukaCarousel"
import productos from "@/data/data"
import { cn } from "@/lib/utils"
import SimpleCardSeccion from "@/components/custom/simpleCardSeccion"

interface SeccionProps {
  children?: React.JSX.Element
  className?: string
  titulo?: string
}

const MiSeccion = ({ children, titulo, className }: SeccionProps) => {
  return (
    <section className={cn('flex flex-col md:flex-row gap-8 mx-auto max-w-full', className)} >
      <div className="flex flex-col">
        <h3 className="font-light text-pretty  text-2xl md:text-5xl py-6 ml-4">
          {titulo}
        </h3>
        {children}
      </div>
    </section>
  )
}

const App = () => {

  const todosLosProductos = productos.products
  const heroProductos = productos.products.slice(5, 14)
  const productosDetalle = productos.products[0]
  const productoslacteos = productos.products.slice(14, 17)
  const productosOtros = productos.products.slice(17, 19)
  const productosVerduras = productos.products.slice(19)

  const styles = {
    tituloHero: "mx-auto font-extralight text-pretty text-3xl  md:text-5xl my-10  py-6 text-center relative  before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em]"
  }

  const { tituloHero } = styles

  return (
    <main className="flex flex-wrap max-w-full">
      <MiSeccion>
        <CustomNukaCarousel images={todosLosProductos} />
      </MiSeccion>
      <MiSeccion>
        <h1 className={tituloHero}>
          Bienvenidos a la mejor bodeguita online
        </h1>
      </MiSeccion>
      <MiSeccion titulo="Los mas vendidos">
        <CustomNukaCarousel images={heroProductos} />
      </MiSeccion>
      <div className=" flex flex-col md:flex-row gap-4 ">
        <MiSeccion className="max-w-full" >
          <>
            <ProductoEspecial imagen={productosDetalle} titulo={productosDetalle.titulo as string} descripcion={productosDetalle.descripcion as string} contenido={productosDetalle.descripcion as string} boton={true} />
            <MiSeccion titulo="Otros">
              <SimpleCardSeccion images={productosOtros} />
            </MiSeccion>
          </>
        </MiSeccion>
        <div className="flex flex-col max-w-[50%]">
          <MiSeccion titulo="Otros">
            <SimpleCardSeccion images={productosOtros} />
          </MiSeccion>
          <MiSeccion titulo="Lacteos">
            <SimpleCardSeccion images={productoslacteos} />
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
