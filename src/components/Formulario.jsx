import Marcas from './Marcas'
import Year from './Year'
import Plan from './Plan'
import useCotizador from '../hooks/useCotizador'
import Error from './Error'

const Formulario = () => {
  const { datos, setError, error, cotizarSeguro } = useCotizador();
  const handleSubmit = e => {
    e.preventDefault()
    if (Object.values(datos).includes("")) {
      setError("todos los campos son obligatorios")
      return
    }
    setError("")
    cotizarSeguro()
  }
  
  return (
    <>
      {error && <Error />}
      <form
        onSubmit={handleSubmit}
      >
        <Marcas />
        <Year />
        <Plan />
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