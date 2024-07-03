import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <Image src='/loading.gif' alt='loading...' width='250' height='250'/>
  )
}

export default Loading
