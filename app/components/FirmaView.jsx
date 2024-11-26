import React from 'react';

function FirmaView({ datos, templateFirma }) {
    const handleCopy = () => {
        const content = templateFirma(datos.nombre, datos.cargo, datos.telefono, datos.ubicacion);
        navigator.clipboard.writeText(content).then(() => {
            alert('Contenido copiado al portapapeles!');
        }).catch(err => {
            console.error('Error al copiar: ', err);
        });
    };

    return (
        <div>
            <div className='flex align-middle justify-center' dangerouslySetInnerHTML={{ __html: templateFirma(datos.nombre, datos.cargo, datos.telefono, datos.ubicacion) }} />
        </div>
    );
}

export default FirmaView;

