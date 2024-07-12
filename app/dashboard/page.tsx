'use client'

import React, { useEffect, useState } from 'react'
import RutaProtegida from '@/components/custom/rutaProtegida'
import { useAuth } from '@/context/ContextoAuth'
// import { getDataCacheada } from '@/utils/fetching'

const getData = async () => {
  const url = 'https://668f316b80b313ba09173c3e.mockapi.io/mergedData'
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const Dashboard = () => {
  const { usuario } = useAuth()
  interface DataItem {
    src: string; // Adjust this type according to the actual data structure
  }
  
  const [data, setData] = useState<DataItem[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData()
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, []) // Empty dependency array means this effect runs once on mount

  return (
    <RutaProtegida>
      <div>Soy la vista del dashboard</div>
      <>
        {data.map((res, index) => (
          <div key={index}>{res?.src}</div>
        ))}
      </>
    </RutaProtegida>
  )
}

export default Dashboard
