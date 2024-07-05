import ProductoEspecial from "@/components/custom/productoEspecial"
import CustomCarousel from "../components/custom/customCarousel"
import productos from "@/data/data"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"


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

  const router = useRouter()

  const handleClickProducto = (productId: number) => {
    router.push(`/product/${productId}`)
  }

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
        <CustomCarousel images={todosLosProductos} />
      </MiSeccion>
      <MiSeccion>
        <h1 className={tituloHero}>
          Bienvenidos a la mejor bodeguita online
        </h1>
      </MiSeccion>
      <MiSeccion titulo="Los mas vendidos">
        <CustomCarousel images={heroProductos} />
      </MiSeccion>
      <MiSeccion >
        <ProductoEspecial imagen={productosDetalle} titulo={productosDetalle.titulo as string} descripcion={productosDetalle.descripcion as string} contenido={productosDetalle.descripcion as string} />
      </MiSeccion>
      <div className="flex flex-col ">
        <MiSeccion titulo="Lacteos">
          <CustomCarousel images={productoslacteos} />
        </MiSeccion>
        <MiSeccion titulo="Otros">
          <CustomCarousel images={productosOtros} />
        </MiSeccion>
        <MiSeccion titulo="Otros">
          <CustomCarousel images={productosOtros} />
        </MiSeccion>
      </div>
      <MiSeccion titulo="Verduras">
        <CustomCarousel images={productosVerduras} />
      </MiSeccion>
    </main>
  )
}

export default App
