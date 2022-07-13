import React from 'react'
import useCotizador from '../hooks/useCotizador'
const Error = () => {
    const{error}=useCotizador()
  return (
    <div
    className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert" 
    >{error}</div>
  )
}

export default Error