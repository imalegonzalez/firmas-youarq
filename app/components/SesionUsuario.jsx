'use client'
import { signIn, signOut, useSession } from 'next-auth/react';

function SesionUsuario() {
  // const { data: session } = useSession();

  return (
    <>
    <div>
      <h1 className='text-white'>Firmas Youarq</h1>
    </div>

    {/* {session?.user ? (
        <p>Sesion iniciada</p>
      ) : 
      (
        <p onCanPlay={signIn()}> Iniciar sesion</p>
      )
    } */}
    </>
  );
}

export default SesionUsuario