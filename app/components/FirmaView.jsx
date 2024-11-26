import React from 'react';

function FirmaView({ datos, templateFirma }) {

    

    return (
        <div className='flex align-middle justify-center' dangerouslySetInnerHTML={{ __html: templateFirma(datos.nombre, datos.cargo, datos.telefono, datos.ubicacion) }} />
    );
}

export default FirmaView;
