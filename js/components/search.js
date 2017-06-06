'use strict';
const StationItem = (data,update)=>{
	const todo = $("<div></div>");
	const span = $("<span>"+data.name+"</span>");
	const parr = $("<p>"+data.address+"</p>");

	todo.append(span);
	todo.append(parr);

	return todo;

};

const reRender = (listStations,encontrados)=>{
	listStations.empty();

	encontrados.forEach(station=>{
		listStations.append(StationItem(station, _ =>{reRender(listStations,encontrados); }));
		
	});
};

const Search = (update)=>{
	const contenedor = $("<div></div>");
	const input = $("<input type='text'>");
	const listStations = $("<div></div>");

	contenedor.append(input);
	contenedor.append(listStations);

	input.on("keyup", () =>{		
		if(input.val() != ""){
			console.log(filterByDistrict(state.stations,input.val()));
			var encontrados = filterByDistrict(state.stations,input.val());
		}

		reRender(listStations,encontrados);	
	});

	return contenedor;	
};