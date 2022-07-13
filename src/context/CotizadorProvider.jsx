 import { useState,createContext } from 'react'
import {obtenerDiferenciaYear,calcularMarca,calcularPlan,formatearDinero} from "../context/helpers/index"

const CotizadorContext =  createContext()

const CotizadorProvider=({children})=>{
    const [error, setError]=useState("")
    const [cargando, setCargando]=useState(false)
    const [resultado, setResultado]=useState(0)
    const [datos,setDatos]=useState({
        marca: "",
        year:"",
        plan:"",
    })
   const handleChangeDatos=e=>{
      setDatos({
          ...datos,
          [e.target.name] : e.target.value
      })
    }
    const cotizarSeguro=()=>{
         let resultado=2000
const diferencia= obtenerDiferenciaYear(datos.year)
resultado -=((diferencia*3)*resultado)/100
 resultado*=calcularMarca(datos.marca)
 resultado*=calcularPlan(datos.plan)
 resultado=resultado.toFixed(2)
 resultado= formatearDinero(resultado)
 
  setCargando(true)
 setTimeout(()=>{
     setCargando(false)
    setResultado(resultado)
 },3000);
    }
    return (
        <CotizadorContext.Provider 
        value={{
            datos,
            setDatos,
          handleChangeDatos,
          error,
          setError,
          cotizarSeguro,
          resultado,
          setResultado,
          cargando
        }}
        >
            {children}
        </CotizadorContext.Provider>
    )

}
export {
   CotizadorProvider 
}
export default CotizadorContext
