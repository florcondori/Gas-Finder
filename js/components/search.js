'use strict';
const StationItem = (station,update)=>{
	const stationItem = $("<div class='stationItem'></div>");
	const name = $("<span>"+station.name+"</span>");
	const address = $("<p>"+station.address+"</p>");
	const district = $("<p>"+station.district+"</p>");
	const ancla = $("<a href='#'>seleccionar</a>");

	stationItem.append(name);
	stationItem.append(ancla);
	stationItem.append(address);
	stationItem.append(district);

	ancla.on("click",(e) => {
    e.preventDefault();
    state.selectedStation = station;
    update();
  
  });
	return stationItem;
};

const reRender = (listStations,encontrados,update)=>{
	listStations.empty();

	encontrados.forEach(station=>{
		listStations.append(StationItem(station, update));
		
	});
};

const Search = (update)=>{
	const contenedor = $("<div></div>");
	const input = $("<input type='text'>");
	const listStations = $("<div class='list-contenedor'></div>");

	contenedor.append(input);
	contenedor.append(listStations);

	input.on("keyup", () =>{		
		if(input.val() != ""){
			console.log(filterByDistrict(state.stations,input.val()));
			var encontrados = filterByDistrict(state.stations,input.val());
		}

		reRender(listStations,encontrados,update);	
	});

	return contenedor;	
};