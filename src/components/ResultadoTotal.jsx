import React from 'react'
import useCotizador from '../hooks/useCotizador'

const ResultadoTotal = () => {
    const {resultado}=useCotizador()
  if(resultado===0)return null
  return (
    <div>{resultado}</div>
  )
}

export default ResultadoTotal