

import Providers from './Providers'
import SesionUsuario from './components/SesionUsuario'

import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Firma | Youarq',
  description: 'Generador de firmas email by youarq',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Providers> */}
          <SesionUsuario />
          {children}  
        {/* </Providers> */}
      </body>
    </html>
  )
}
