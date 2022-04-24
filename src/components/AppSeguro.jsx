import Formulario from "./Formulario"

const AppSeguro = () => {
  return (

     <>
     <header className="my-10 ">
         {/* <h1 className=" titulo bg-red-800 text-black text-center text-4xl font black uppercase mx-10 shadow-md">cotizador de seguros de auto</h1> */}
         <h1 className=" titulo text-red-800">cotizador de seguros de auto</h1>
         <main className=" bg- white md: w2/3 lg:w 2/4 mx-auto shadow rounded-lg p-10">
             <Formulario/>
         </main>
     </header>
     </>
  )
}

export default AppSeguro