"use client"

import parse from 'html-react-parser';
import {encode, decode} from 'html-entities';
import React, { Children } from 'react'

function PreviewFirma(props) {

  const firmaDecode = decode(props.firmaState, {level: 'xml'})

  console.log('devode', firmaDecode)
  
  return (
    <>
    {parse(firmaDecode)}
    </>
  )
}

export default PreviewFirma
