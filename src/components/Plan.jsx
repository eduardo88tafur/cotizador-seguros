
import { Fragment } from 'react'
import { PLANES } from '../constants'
 
const Plan = () => {
  return (
    <div>
    <label  className='block mb-3 font-bold text-black-400 uppercase'>
        elige un plan
    </label>
    <div className='flex gap-3 items-center'>
        {PLANES.map(plan=>(
            <Fragment key={plan.id}>
                <label>
                {plan.nombre}
                </label>
                <input 
                type="radio" 
                name= "plan"
                value={plan.id}
                />
            </Fragment>
            ))}
    </div>
    </div>
   
  )
}
export default Plan