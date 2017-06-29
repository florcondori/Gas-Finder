'use strict';
const StationItem = (station,update)=>{
	const stationItem = $("<div class='stationItem'></div>");
	const name = $("<span class='bold'>"+station.name+"</span>");
	const address = $("<p>"+station.address+"</p>");
	const district = $("<p>"+station.district+"</p>");
	const ancla = $("<a href='#'></a>");
	const iconMap =$("<i class='fa fa-map'></i>");

	ancla.append(iconMap);

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
		if(encontrados.length > 0){
			encontrados.forEach(station=>{
				listStations.append(StationItem(station, update));
			
			});
		}
		
		if(encontrados.length == 0){
			listStations.append("<p class='no-encontrado'>No hay Estaciones en ese distrito</p>");
		}
	
		
};

const Search = (update)=>{
	const containerSearch = $("<section></section>");
	const sectionSearch = $("<div class='bg-red p-7'></div>");
	const div = $("<div class='bg-white p-7'></div>");
	const iconSearch = $("<i class='fa fa-search'></i>");
	const input = $("<input type='text' placeholder='Ingrese su destino a buscar'>");
	const listStations = $("<div></div>");

	div.append(iconSearch);
	div.append(input);

	sectionSearch.append(div);

	state.stations.forEach(station=>{
		listStations.append(StationItem(station, update));
		
	});

	containerSearch.append(sectionSearch);
	containerSearch.append(listStations);

	input.on("keyup", () =>{		
		const encontrados = filterByDistrict(state.stations,input.val());
		
		reRender(listStations,encontrados,update);
	});

	return containerSearch;	
};