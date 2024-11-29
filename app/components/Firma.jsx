"use client"
import React, { useEffect, useState } from 'react'
import PreviewFirma from './PreviewFirma'
import FirmaForm from './Form'
import FirmaView from './FirmaView'
import FirmaCode from './FirmaCode'

const templateFirma = (nombre, cargo, telefono, ubicacion) => {
	let direccion = "";
	if (ubicacion === "CABA") {
		direccion = "Coronel Niceto Vega 5568";
	} else if (ubicacion === "CBA") {
		direccion = "Boulevard San Juan 651";
	} else {
		direccion = undefined;
	}

	return `<div class="youarq-firma"> 
		<table style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; margin:10px;" border="0" cellpadding="0" cellspacing="0" height="200"> 
			<tbody> 
				<tr> 
					<td style=""> 
						<table border="0" cellpadding="0" cellspacing="0" width="100%" style="text-align: center;"> 
							<tbody> 
								<tr> 
									<td align="center"> 
										<table> 
											<tbody> 
												<tr> 
													<td align="center"><a href="https://youarq.com"><img src="https://i.ibb.co/T0h2jHp/logo-ig-MIN.png" alt="logo" width="100" height:="" 25px;=""></a></td> 
												</tr> 
											</tbody> 
										</table> 
									</td> 
								</tr> 
							</tbody> 
						</table> 
					</td> 
					<td> 
						<table> 
							<tbody> 
								<tr> 
									<td> 
										<table> 
											<tbody style=""> 
												<tr> 
													<td style="font-size:12px;/* padding-top: 10px; */color:#dc6441;font-weight:bold;"> ${nombre} | <span style="font-size:12px;color:#4b5662;"> ${cargo} </span></td> 
												</tr> 
												<tr> 
													<td style="font-size:12px; line-height:1;"><span style="color:#dc6441;font-weight: 600;"></span> <a href="tel:${telefono}" style="color:#697582;text-decoration:none;">(+54) ${telefono}</a></td> 
												</tr> 
												<tr></tr> 
												<tr></tr> 
												<tr style="/* padding-top: 10px; */"> 
													<td style="font-size:12px;color:#697582;line-height:1;padding-top: 10px;"><span style="color:#dc6441; font-weight: 600;"> YouArq</span> | <span style="color:#dc6441;font-weight: 600;"></span> <a href="https://youarq.com" style="color:#697582; text-decoration:none;">www.youarq.com</a></td> 
												</tr> 
												${direccion ? `<tr> 
													<td style="font-size:12px; color:#697582; line-height:1;"><span style="color:#dc6441;font-weight: 600;"></span> ${direccion} </td> 
												</tr>` : ''}
												<tr> 
													<td style=style="padding-top: 4px; text-align:left;" width="100%"> 
														<a href="https://www.facebook.com/youarq/" style="padding-right: 5px;"><img alt="facebook" src="https://youarq.s3.sa-east-1.amazonaws.com/facebook+(1).png" style="border-radius: 50%;padding: 2px;background-color: #dc6441;" height="24" width="24"></a> 
														<a href="https://www.instagram.com/youarq/" style="padding-right: 5px;"><img alt="Instagram" src="https://youarq.s3.sa-east-1.amazonaws.com/instagram+(1).png" style="border-radius: 50%;padding: 2px;background-color: #dc6441;" height="24" width="24"></a> 
														<a href="https://www.linkedin.com/company/youarq/" style="padding-right: 5px;"><img alt="linkedin" src="https://youarq.s3.sa-east-1.amazonaws.com/linkedin+(1).png" style="border-radius: 50%;padding: 2px;background-color: #dc6441;" height="24" width="24"></a> 
														<a href="https://wa.me/549${telefono}" style="padding-right: 5px;"><img alt="whatsapp" src="https://youarq.s3.sa-east-1.amazonaws.com/message-circle-more.png" style="border-radius: 50%;padding: 2px;background-color: #dc6441;" height="24" width="24"></a> 
													</td> 
												</tr> 
											</tbody> 
										</table> 
									</td> 
								</tr> 
							</tbody> 
						</table> 
					</td> 
				</tr> 
			</tbody> 
		</table> 
	</div>`;
}




function Firma(props) {

	// Estado para los inputs (vacío inicialmente)
	const [datos, setDatos] = useState({ 
		nombre: "", 
		cargo: "", 
		telefono: "", 
		ubicacion: "" 
	});

	// Estado para la visualización (con datos de prueba)
	const [preview, setPreview] = useState({
		nombre: "Alejo Gonzalez", 
		cargo: "Gerente de Marketing", 
		telefono: "1123879878", 
		ubicacion: "CABA"
	});

	function handleInputChange(event) {
		const { name, value } = event.target;
		setDatos(prev => ({ ...prev, [name]: value }));
		setPreview(prev => ({ ...prev, [name]: value }));
	}

	function descargarHTML() {
		// Generamos el código HTML con los datos actuales
		const codigoHTML = templateFirma(preview.nombre, preview.cargo, preview.telefono, preview.ubicacion);
		
		// Creamos un Blob con el contenido HTML
		const blob = new Blob([codigoHTML], { type: 'text/html' });
		
		// Creamos una URL temporal para el blob
		const url = URL.createObjectURL(blob);
		
		// Creamos un elemento <a> temporal
		const a = document.createElement('a');
		a.href = url;
		a.download = 'firma.html'; // Nombre del archivo a descargar
		
		// Simulamos el clic
		document.body.appendChild(a);
		a.click();
		
		// Limpiamos
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}



	return (
		<div className=''>
			<FirmaForm datos={datos} handleInputChange={handleInputChange} />
			<FirmaView datos={preview} templateFirma={templateFirma} />
			<button 
				onClick={descargarHTML}
				className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded"
			>
				Descargar Firma
			</button>
		</div>
	)
}

export default Firma
