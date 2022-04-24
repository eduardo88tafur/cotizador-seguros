import React from 'react'
import {MARCAS,} from "../constants"
const Marcas = () => {
  return (
    <div>
             <label  className='block mb-3 font-bold text-black-400 uppercase'>
                 marca
             </label>
                 <select name="marca" className='w-full p-2 bg-gold border border-black-200'>
                     <option>--seleccionar marca--</option>
                     {MARCAS.map(marca=>(
                         <option
                             key={marca.nombre} 
                           value={marca.id}
                             >
                                 {marca.nombre}
                         </option>
                    
                     ))}
                 </select>
         </div>
  )
}

export default Marcas