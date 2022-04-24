import React from 'react'
import Marcas from './Marcas'
import Year from './Year'
import Plan from './Plan'

const Formulario = () => {
  return (
     <>
     <form>
         <Marcas/>
         <Year/>
         <Plan/>
         <input
    type="submit"
    className='boton   w-full text-white cursor-pointer p-3 uppercase font-bold rounded-md'
    value="cotizar"
    />

     </form>
     </>
  )
}

export default Formulario