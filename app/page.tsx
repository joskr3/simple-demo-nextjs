import ProductoEspecial from "@/components/custom/productoEspecial"
import CustomCarousel from "../components/custom/carousel"

const App = () => {

  const images = [{ src: '/oilb.jpg', witdh: 1020 }, { src: '/leche.jpg', witdh: 1020 }, { src: '/tomatitos.jpg', witdh: 1020 }, { src: '/zanahorias.jpg', witdh: 1020 }]

  const verduras = [{ src: '/cebollas.jpg', witdh: 250 }, { src: '/pepinos.jpg', witdh: 250 }, { src: '/tomatitos.jpg', witdh: 250 }, { src: '/zanahorias.jpg', witdh: 250 }, { src: '/tomatoes.jpg', witdh: 250 }]


  return (
    <>
      <CustomCarousel images={images} />
      <h1 className="mx-auto font-extralight text-pretty text-3xl  md:text-5xl my-10  py-6 text-center relative  before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] ">Bienvenidos a la mejor bodeguita online </h1>
      <section className="flex flex-col md:flex-row gap-8 mx-auto">
        <div className="flex flex-col m-3 flex-wrap justify-around ">
          <div className="flex flex-col flex-wrap md:flex-row gap-3 max-h-80   m-[0 auto] mb-6">
            <div className="flex flex-col md:flex-row gap-3 m-[0 auto]">
              <div className="flex flex-col gap-3 m-[0 auto]">
                <h3 className="font-light text-pretty text-2xl py-6  ml-4 ">Las mas vendidas  en verduras</h3>
                <CustomCarousel images={verduras} className=" flex justify-center " />
              </div>
            </div>
          </div>
          <ProductoEspecial imagen={images[0]} titulo="Producto del dia" contenido="El producto del dia , es aquel , que al ser el mas comparado de la tienda aparece en esta seccion" descripcion="Producto del dia (desc)" />
        </div>
      </section>
    </>
  )
}

export default App
