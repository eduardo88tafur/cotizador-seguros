import React from 'react'
import {YEARS} from "../constants"

const Year = () => {
  return (
     
    <div>
    <label  className='block mb-3 p-2 font-bold text-black-400 uppercase '>
        año
    </label>
        <select name="año" className='w-full p-3 bg-gold border border-black-200 '>
            <option>--seleccionar año--</option>
            {YEARS.map(year=>(
                <option
                    key={year} 
                  value={year}
                    >
                        {year}
                </option>
           
            ))}
        </select>
</div>
  )
}

export default Year