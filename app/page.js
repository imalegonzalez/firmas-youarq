import Image from 'next/image'
import Firma from './components/Firma'
import PreviewFirma from './components/PreviewFirma'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <h1 className='py-10 text-2xl font-bold text-slate-600'>Generá tu firma personalizada</h1>
      <div className="flex flex-col items-center">
        <Firma nombre="Alejo" rol="Gerente" tel="1123879878"/>
      </div>
      
    </main>
  )
}
