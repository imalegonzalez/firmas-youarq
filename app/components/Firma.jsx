"use client"
import React, { useEffect, useState } from 'react'
import PreviewFirma from './PreviewFirma'

const templateFirma = (nombre, cargo, telefono) => `<div class="youarq-firma"> <table style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; margin:10px;" border="0" cellpadding="0" cellspacing="0" height="200"> <tbody> <tr> <td style=""> <table border="0" cellpadding="0" cellspacing="0" width="100%" style="text-align: center;"> <tbody> <tr> <td align="center"> <table> <tbody> <tr> <td align="center"><a href="https://youarq.com"><img src="https://i.ibb.co/T0h2jHp/logo-ig-MIN.png" alt="logo" width="100" height:="" 25px;=""></a></td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> <td> <table> <tbody> <tr> <td> <table> <tbody style=""> <tr> <td style="font-size:12px;/* padding-top: 10px; */color:#dc6441;font-weight:bold;"> ${nombre} | <span style="font-size:12px;color:#4b5662;"> ${cargo} </span></td> </tr> <tr> <td style="font-size:12px; line-height:1;"><span style="color:#dc6441;font-weight: 600;"></span> <a href="tel:${telefono}" style="color:#697582;text-decoration:none;">(+54) ${telefono}</a></td> </tr> <tr></tr> <tr></tr> <tr style="/* padding-top: 10px; */"> <td style="font-size:12px;color:#697582;line-height:1;padding-top: 10px;"><span style="color:#dc6441; font-weight: 600;"> YouArq</span> | <span style="color:#dc6441;font-weight: 600;"></span> <a href="https://youarq.com" style="color:#697582; text-decoration:none;">www.youarq.com</a></td> </tr> <tr> <td style="font-size:12px; color:#697582; line-height:1;"><span style="color:#dc6441;font-weight: 600;"></span> Av. Cordoba 6087, 4B, CABA </td> </tr> <tr> <td style=style="padding-top: 4px; text-align:left;" width="100%"> <a href="https://www.facebook.com/youarq/" style="padding-right: 5px;"><img alt="facebook" src="https://drive.google.com/uc?export=view&amp;id=1ktKnm8gTSE4n8NsaPOva-gvBhCaXFI22" style="border-radius: 50%;padding: 2px;background-color: #dc6441;" height="16" width="16"></a> <a href="https://www.instagram.com/youarq/" style="padding-right: 5px;"><img alt="Instagram" src="https://drive.google.com/uc?export=view&amp;id=1edngVqSP9oXft0abp_sRpBrB6qtcrSUP" style="border-radius: 50%;padding: 2px;background-color: #dc6441;" height="16" width="16"></a> <a href="https://www.linkedin.com/company/youarqsrl/" style="padding-right: 5px;"><img alt="linkedin" src="https://drive.google.com/uc?export=view&amp;id=1uBMAXnvRBBT_qNuB3PPfYCItDstCE85J" style="border-radius: 50%;padding: 2px;background-color: #dc6441;" height="16" width="16"></a> <a href="https://wa.me/549${telefono}" style="padding-right: 5px;"><img alt="whatsapp" src="https://drive.google.com/uc?export=view&amp;id=122DEo3rMHYTeTAE7WK2phu4QAeVmaqgF" style="border-radius: 50%;padding: 2px;background-color: #dc6441;" height="16" width="16"></a> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </div>`

  


function Firma(props) {

	const [datos, setDatos] = useState({nombre: "Alejo Gonzalez", cargo: "Gerente de Marketing", telefono: "1123879878"})
	const [copiado, setCopiado] = React.useState(false);

	
	
	function handleInputChange(event) {
	const { name, value } = event.target;
	setDatos(prev => ({ ...prev, [name]: value }));
  	}
  
	function handleSubmit(event) {
		event.preventDefault();
		// Aquí puedes hacer algo adicional si es necesario
	}
	function copiarAlPortapapeles() {
		// Obtenemos el contenido del elemento <code>
		const codigo = document.querySelector("#containerId code").textContent;
	  
		// Usamos la API navigator.clipboard para copiar el texto
		navigator.clipboard.writeText(codigo).then(() => {
		  console.log("Texto copiado al portapapeles!");

		   // Activa el efecto
		   setCopiado(true);

		   // Desactiva el efecto después de 1.5 segundos
		   setTimeout(() => {
			 setCopiado(false);
		   }, 1500);
		}).catch(err => {
		  console.error("Error al copiar el texto: ", err);
		});


	  }

 
  
  return (
    <div className=''>
		<form className=' h-fit grid md:flex-row md:gap-4'>
			<div className="">
				<label for="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
				<input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				type="text" 
				name="nombre" 
				value={datos.nombre} 
				onChange={handleInputChange}
				placeholder="Nombre"
				/>
			</div>
			<div className="">
				<label for="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono</label>
				<input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				type="text" 
				name="telefono" 
				value={datos.telefono} 
				onChange={handleInputChange}
				placeholder="Teléfono"
				/>
			</div>
			<div class="">
				<label for="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cargo</label>
				<input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				type="text" 
				name="cargo" 
				value={datos.cargo} 
				onChange={handleInputChange}
				placeholder="Cargo"
				/>
			</div>
		</form>
    	<div className='flex align-middle justify-center' dangerouslySetInnerHTML={{ __html: templateFirma(datos.nombre, datos.cargo, datos.telefono)}}/>

	
     
    <div className="m-auto overflow-hidden mb-16">
		<div className={`${copiado ? 'copiado' : 'codeBlock '}`} id="containerId">
			<pre className=' text-xs wrap whitespace-normal text-base flex relative m-0'>
				<button id="copiarBttn" onClick={copiarAlPortapapeles}>Copiar</button>
				<code className=" max-h-64 overflow-scroll overflow-x-hidden">
				{templateFirma(datos.nombre, datos.cargo, datos.telefono)}
				</code>
			</pre>
		</div>
		
	</div>

	
    </div>
  )
}

export default Firma
