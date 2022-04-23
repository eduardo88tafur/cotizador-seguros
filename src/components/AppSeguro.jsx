import Formulario from "./Formulario"

const AppSeguro = () => {
  return (

     <>
     <header className="my-10">
         <h1 className="text-black text-center text-4xl font black ">cotizador de seguros de auto</h1>
         <main className="bg- white md: w2/3 lg:w 2/4 mx-auto shadow rounded-lg p-10">
             <Formulario/>
         </main>
     </header>
     </>
  )
}

export default AppSeguro