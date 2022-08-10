let ciudades=[];

const listarciudades=async(idpais)=>{
	try{
		const response=await fetch(`./ciudades/${idpais}`);
		const data= await response.json();
		if(data.message==="Success"){
			ciudades=data.ciudades;
			let opciones='';
			data.ciudades.forEach((ciudad)=>{
				opciones+=`<option value='${ciudad.id}'>${ciudad.nombre}</option>`;
			});
			cbociudad.innerHTML=opciones;
			mostrearalcande(data.ciudades[0].id);
		}else{
			alert("ciudades no encontradas");
		};
	}
	catch(error){
		console.log(error);
	};
};


const listarpaises=async()=>{
	try{
		const response=await fetch("./paises");
		const data= await response.json();
		if(data.message==="Success"){
			let opciones='';
			data.paises.forEach((pais)=>{
				opciones+=`<option value='${pais.id}'>${pais.nombre}</option>`;
			});
			cbopais.innerHTML=opciones;
			listarciudades(data.paises[0].id);
		}else{
			alert("paises no encontrados");
		};
	}
	catch(error){
		console.log(error);
	};

};

const mostrearalcande=(idciudad)=>{
	ciudadencontrada=ciudades.filter((ciudad)=>ciudad.id==idciudad)[0];
	alcalde=ciudadencontrada.alcalde;
	txtalcalde.innerHTML=`alcalde: ${alcalde}`;
}


const cargainicial=async()=>{
	await listarpaises();

	cbopais.addEventListener('change',(event)=>{
		listarciudades(event.target.value);
	});

	cbociudad.addEventListener('change',(event)=>{
		mostrearalcande(event.target.value);
	});
};

window.addEventListener('load', async()=>{
	await cargainicial();
});