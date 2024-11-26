import React from 'react';

function FirmaForm({ datos, handleInputChange }) {
    return (
        <form className=' gap-4 h-fit grid md:flex-row md:gap-4'>
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
			<div class="md:col-span-2">
				<label for="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cargo</label>
				<input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				type="text" 
				name="cargo" 
				value={datos.cargo} 
				onChange={handleInputChange}
				placeholder="Cargo"
				/>
			</div>
			<div className="md:col-span-2">
				<label htmlFor="select-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ubicación</label>
				<select 
					name="ubicacion" 
					value={datos.ubicacion} 
					onChange={handleInputChange}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				>
					<option value="">Seleccione una opción</option>
					<option value="CABA">Buenos Aires</option>
					<option value="CBA">Córdoba</option>
				</select>
			</div>
		</form>
    );
}

export default FirmaForm;
