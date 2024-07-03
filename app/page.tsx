import ProductoEspecial from "@/components/custom/productoEspecial"
import CustomCarousel from "../components/custom/carousel"

const App = () => {

  const images = [{ src: '/aceite.jpg', witdh: 1020 }, { src: '/leche.jpg', witdh: 1020 }, { src: '/tomatitos.jpg', witdh: 1020 }, { src: '/zanahorias.jpg', witdh: 1020 }]

  const verduras = [{ src: '/cebollas.jpg', witdh: 250 }, { src: '/pepinos.jpg', witdh: 250 }, { src: '/tomatitos.jpg', witdh: 250 }, { src: '/zanahorias.jpg', witdh: 250 }, { src: '/tomatoes.jpg', witdh: 250 }]


  return (
    <>
      <CustomCarousel images={images} />
      <h1 className="m-auto font-extralight text-pretty text-5xl  md:text-8xl my-10 md:my-48 py-6 text-center">Bienvenidos a la mejor bodeguita online </h1>
      <section className="flex flex-col md:flex-row gap-8 mx-auto">
        <div className="flex flex-col m-3 flex-wrap justify-around ">
          <div className="flex flex-col flex-wrap md:flex-row gap-3 max-h-80   m-[0 auto] mb-6">
            <div className="flex flex-col md:flex-row gap-3 m-[0 auto]">
              <div className="flex flex-col gap-3 m-[0 auto]">
                <h3 className="font-light text-pretty text-xl py-6  mr-3 ">Las mas vendidas  en verduras</h3>
                <CustomCarousel images={verduras} className=" flex justify-center " />
              </div>
            </div>
          </div>
          <ProductoEspecial imagen={images[0]} titulo="Producto del dia" contenido="El producto del dia , es aquel , que al ser el mas comparado de la tienda aparece en esta seccion" descripcion="Producto del dia (desc)" onClick={ } />
        </div>
      </section>

    </>
  )
}

export default App
