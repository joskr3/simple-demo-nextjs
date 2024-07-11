'use client'

import RutaProtegida from '@/components/custom/rutaProtegida'
import { useAuth } from '@/context/ContextoAuth'
import { getDataCacheada } from '@/utils/fetching'
import React from 'react'

// async function getData() {
//   const url = 'https://668f316b80b313ba09173c3e.mockapi.io/mergedData'
//   const respuesta = await getDataCacheada(url)
//   return respuesta
// }

async function getData() {
  const url = 'https://668f316b80b313ba09173c3e.mockapi.io/mergedData'
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const Dashboard = async () => {

  const { usuario } = useAuth()
  const data = await getData()

  console.log("Hola estoy en la vista del dashboard y el usuario es el siguiente", usuario)

  // const MiTabla = (res:any) => { 
  //   return (
  //     <table>
  //       <td>{ res?.src?.src}</td>
  //       <td>{res?.width}</td>
  //       <td>{res?.titulo}</td>
  //       <td>{res?.descripcion}</td>
  //     </table>
  //   )
  // }

  //console.log(data, "DATA DESDE EL MOCKAPI")
  return (
    <RutaProtegida>
      <div>Soy la vista del dashboard</div>
      <>
        {data.map((res: any, index: number) => (
          <div key={index}>{res?.src}</div>
        ))}
      </>
    </RutaProtegida>
  )
}

export default Dashboard
