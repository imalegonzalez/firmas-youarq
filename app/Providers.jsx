'use client'
import React from 'react'
import { SessionProvider, getSession } from 'next-auth/react';


function Providers({childrens}) {
  return 
    <SessionProvider>
        {childrens}
    </SessionProvider>
  
}

export default Providers