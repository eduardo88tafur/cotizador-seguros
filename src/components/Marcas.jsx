import React from 'react'
import { MARCAS, } from "../constants"
import useCotizador from '../hooks/useCotizador'
const Marcas = () => {
  const {datos,handleChangeDatos}=useCotizador();
  return (
    <div>
      <label className='block mb-3 font-bold text-black-400 uppercase'>
        marca
      </label>
      <select name="marca" className='w-full p-2 bg-gold border border-black-200'
        onChange={e => handleChangeDatos(e)}
        value={datos.marca}
      >
        <option>--seleccionar marca--</option>
        {MARCAS.map(marca => (
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