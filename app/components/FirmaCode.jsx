import React from 'react';

function FirmaCode({ datos, copiado, copiarAlPortapapeles ,templateFirma }) {

    return (
        <div className="m-auto overflow-hidden mb-16">
		<div className={`${copiado ? 'copiado' : 'codeBlock '}`} id="containerId">
			<pre className=' text-xs wrap whitespace-normal text-base flex relative m-0'>
				<button id="copiarBttn" onClick={copiarAlPortapapeles}>Copiar</button>
				<code className=" max-h-64 overflow-scroll overflow-x-hidden">
				{templateFirma(datos.nombre, datos.cargo, datos.telefono, datos.ubicacion)}
				</code>
			</pre>
		</div>
		
	</div>
    );
}

export default FirmaCode;