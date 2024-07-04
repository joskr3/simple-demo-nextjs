import ProductoEspecial from "@/components/custom/productoEspecial"
import CustomCarousel from "../components/custom/carousel"
import CustomProductCarousel from "@/components/custom/customProductCarousel"

const App = () => {

  const images = [{ src: '/oilb.jpg', witdh: 1020 }, { src: '/leche.jpg', witdh: 1020 }, { src: '/tomatitos.jpg', witdh: 1020 }, { src: '/zanahorias.jpg', witdh: 1020 }]

  const verduras = [{ src: '/cebollas.jpg', witdh: 250 }, { src: '/pepinos.jpg', witdh: 250 }, { src: '/tomatitos.jpg', witdh: 250 }, { src: '/zanahorias.jpg', witdh: 250 }, { src: '/tomatoes.jpg', witdh: 250 }]

  const lacteos = [{ src: '/leche.jpg', witdh: 250 }, { src: '/yogurt.jpg', witdh: 250 }, { src: '/queso.jpg', witdh: 250 }, { src: '/leche.jpg', witdh: 250 }, { src: '/yogurt.jpg', witdh: 250 }, { src: '/queso.jpg', witdh: 250 }, { src: '/leche.jpg', witdh: 250 }, { src: '/yogurt.jpg', witdh: 250 }, { src: '/queso.jpg', witdh: 250 }]

  const otros = [{ src: '/aceite.jpg', witdh: 250 }, { src: '/pan.jpg', witdh: 250 }, { src: '/aceite.jpg', witdh: 250 }, { src: '/pan.jpg', witdh: 250 }, { src: '/aceite.jpg', witdh: 250 }, { src: '/pan.jpg', witdh: 250 }, { src: '/aceite.jpg', witdh: 250 }, { src: '/pan.jpg', witdh: 250 }, { src: '/aceite.jpg', witdh: 250 }, { src: '/pan.jpg', witdh: 250 }, { src: '/aceite.jpg', witdh: 250 }, { src: '/pan.jpg', witdh: 250 }]

  const lacteos2 = [{
    src: '/leche.jpg',
    witdh: 250,
    titulo: 'Leche',
    descripcion: 'Leche de vaca',
    descuento: 50
  },
  {
    src: '/yogurt.jpg',
    witdh: 250,
    titulo: 'Yogurt',
    descripcion: 'Yogurt de fresa',
    descuento: 30
  },
  {
    src: '/queso.jpg',
    witdh: 250,
    titulo: 'Queso',
    descripcion: 'Queso de vaca',
    descuento: 20
    },
    {
      src: '/leche.jpg',
      witdh: 250,
      titulo: 'Leche',
      descripcion: 'Leche de vaca',
      descuento: 50
    },
    {
      src: '/yogurt.jpg',
      witdh: 250,
      titulo: 'Yogurt',
      descripcion: 'Yogurt de fresa',
      descuento: 30
    },
    {
      src: '/queso.jpg',
      witdh: 250,
      titulo: 'Queso',
      descripcion: 'Queso de vaca',
      descuento: 20
    }
  ]

  const otros2 = [
    {
    src: '/aceite.jpg',
    witdh: 250,
    titulo: 'Aceite de oliva',
    descripcion: 'Aceite de oliva virgen',
    descuento: 50
  },
  {
    src: '/pan.jpg',
    witdh: 250,
    titulo: 'Pan',
    descripcion: 'Pan de trigo',
    descuento: 30
  },
  {
    src: '/aceite.jpg',
    witdh: 250,
    titulo: 'Aceite de oliva',
    descripcion: 'Aceite de oliva virgen',
    descuento: 50
  },
  {
    src: '/pan.jpg',
    witdh: 250,
    titulo: 'Pan',
    descripcion: 'Pan de trigo',
    descuento: 30
  },
  {
    src: '/aceite.jpg',
    witdh: 250,
    titulo: 'Aceite de oliva',
    descripcion: 'Aceite de oliva virgen',
    descuento: 50
  },
  {
    src: '/pan.jpg',
    witdh: 250,
    titulo: 'Pan',
    descripcion: 'Pan de trigo',
    descuento: 30
  }
  ]

  const verduras2 = [
    {
      src: '/cebollas.jpg',
      witdh: 250,
      titulo: 'Cebollas',
      descripcion: 'Cebollas de la huerta',
      descuento: 50
    },
    {
      src: '/pepinos.jpg',
      witdh: 250,
      titulo: 'Pepinos',
      descripcion: 'Pepinos de la huerta',
      descuento: 30
    },
    {
      src: '/tomatitos.jpg',
      witdh: 250,
      titulo: 'Tomates',
      descripcion: 'Tomates de la huerta',
      descuento: 20
    },
    {
      src: '/zanahorias.jpg',
      witdh: 250,
      titulo: 'Zanahorias',
      descripcion: 'Zanahorias de la huerta',
      descuento: 10
    },
    {
      src: '/tomatoes.jpg',
      witdh: 250,
      titulo: 'Tomates',
      descripcion: 'Tomates de la huerta',
      descuento: 10
    }
  ]

  const images2 = [
    {
      src: '/oilb.jpg',
      witdh: 1020,
      titulo: 'Aceite de oliva',
      descripcion: 'Aceite de oliva virgen',
      descuento: 50
    },
    {
      src: '/leche.jpg',
      witdh: 1020,
      titulo: 'Leche',
      descripcion: 'Leche de vaca',
      descuento: 50
    },
    {
      src: '/tomatitos.jpg',
      witdh: 1020,
      titulo: 'Tomates',
      descripcion: 'Tomates de la huerta',
      descuento: 50
    },
    {
      src: '/zanahorias.jpg',
      witdh: 1020,
      titulo: 'Zanahorias',
      descripcion: 'Zanahorias de la huerta',
      descuento: 50
    }
  ]

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
          <ProductoEspecial imagen={images[0]} titulo="Aceite de olviva" descripcion="El aceite de oliva es un tesoro culinario y un elixir de salud ampliamente reconocido por sus múltiples beneficios. Este oro líquido, extraído de las aceitunas" contenido="El aceite de oliva es un tesoro culinario y un elixir de salud ampliamente reconocido por sus múltiples beneficios. Este oro líquido, extraído de las aceitunas, es una piedra angular de la dieta mediterránea, famosa por promover la longevidad y el bienestar." />
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-8 mx-auto">
        <div className="flex flex-col flex-wrap md:flex-row gap-3 max-h-80   m-[0 auto] mb-6">
          <div className="flex flex-col md:flex-row gap-3 m-[0 auto]">
            <div className="flex flex-col gap-3 m-[0 auto]">
              <h3 className="font-light text-pretty text-2xl py-6  ml-4 ">Lacteos con 50% de descuento</h3>
              {/* <CustomProductCarousel images={lacteos2} className=" flex justify-center mx-auto my-10" /> */}
              <CustomCarousel images={lacteos} className=" flex justify-center " />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default App
