import React from 'react'

const Formulario = () => {
  return (
     <>
     <form>
         <div>
             <label  className='block mb-3 font-bold text-black-400 uppercase'>
                 marca
             </label>
                 <select name="marca" className='w-full p-3 bg-white border border-black-200'></select>
         </div>
     </form>
     </>
  )
}

export default Formulario