import { useState, useEffect} from "react";

const useDelate = (valor = '', delay: number) => {
  const [nuevoValor, setNuevoValor] = useState(valor)
  useEffect(() => {
      const handler = setTimeout(() => {
        setNuevoValor(valor)
      }, delay)
      return () => {
        clearTimeout(handler)
      }
  }, [valor,delay])  
  return nuevoValor
}

export default useDelate;
