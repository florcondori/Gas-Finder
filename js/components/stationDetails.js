'use strict';
const StationDetails = _=>{
	const detailsStation = $("<div class='detailsStation'></div>");
	const name = $("<p>"+state.selectedStation.name+"</p>");
	const address = $("<p>"+state.selectedStation.address+"</p>");
	const containerProduct = $("<div class='container-product'></div>");

	state.selectedStation.products.forEach((elem)=>{
		let product = $("<div class='product'>"+elem+"</div>");
		containerProduct.append(product);
	});

	detailsStation.append(name);
	detailsStation.append(address);
	detailsStation.append(containerProduct);

	return detailsStation;
};