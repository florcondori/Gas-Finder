'use strict';
const StationDetails = (update)=>{
	const detailsStation = $("<div class='detailsStation'></div>");
	const name = $("<p>"+state.selectedStation.name+"</p>");
	const address = $("<p>"+state.selectedStation.address+"</p>");
	const containerProduct = $("<div></div>");

	detailsStation.append(name);
	detailsStation.append(address);

	return detailsStation;
};