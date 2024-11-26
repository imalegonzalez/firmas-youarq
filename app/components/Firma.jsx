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
		direccion = "Dirección no disponible";
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
												<tr> 
													<td style="font-size:12px; color:#697582; line-height:1;"><span style="color:#dc6441;font-weight: 600;"></span> ${direccion} </td> 
												</tr> 
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

	const [datos, setDatos] = useState({ nombre: "Alejo Gonzalez", cargo: "Gerente de Marketing", telefono: "1123879878", ubicacion: "CABA" })
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
			<FirmaForm datos={datos} handleInputChange={handleInputChange} />
			<FirmaView datos={datos} templateFirma={templateFirma} />
			<FirmaCode datos={datos} copiado={copiado} copiarAlPortapapeles={copiarAlPortapapeles} templateFirma={templateFirma} />
		</div>
	)
}

export default Firma
