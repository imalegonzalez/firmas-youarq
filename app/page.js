import Image from 'next/image'
import Firma from './components/Firma'
import PreviewFirma from './components/PreviewFirma'


export default function Home() {
  
  return (
    <>
    <main className='flex justify-center align-middle h-fit'>
      <section className="px-5 flex flex-col w-screen max-w-[490px] ">
        <h1 className='py-10 text-2xl font-bold text-slate-600'>Generá tu firma personalizada</h1>
        <div className="">
          <Firma nombre="Alejo" rol="Gerente" tel="1123879878"/>
        </div>
      </section>
      
    </main>
   
    </>
    
  )
}
