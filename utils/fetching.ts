import { cache } from 'react'

export enum Metodos {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

interface TipoOpcionesFetch {
  metodo: Metodos,
  headers: HeadersInit,
  body?: any
}

export interface FetchDataProps {
  url: string
  opciones: TipoOpcionesFetch
}

const obtenerData = async ({ url, opciones }: FetchDataProps) => {
  const response = await fetch(url, {
    method:opciones?.metodo,
    headers:opciones?.headers,
    body: opciones?.body ? JSON.stringify(opciones?.body) : undefined
  })

  if (!response.ok) {
    throw new Error(`Error al consultar la data desde la ${url}`)
  }

  const data = await response.json()
  return data
}

export const precarga = ({ url, opciones }: FetchDataProps) => {
  void getDataCacheada(url, opciones)
}

export const getDataCacheada = cache(async (url: string, opciones: TipoOpcionesFetch ) => {
  return obtenerData({ url, opciones });
});

