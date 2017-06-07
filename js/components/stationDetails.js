'use strict';
const StationDetails = (update)=>{
	const detailsStation = $("<div class='detailsStation'></div>");
	const name = $("<p>"+state.selectedStation.name+"</p>");
	const address = $("<p>"+state.selectedStation.address+"</p>");
	const containerProduct = $("<div class='container-product'></div>");
	const ancla = $("<a id='regresar' href='#'></a>");
	const iconRegresar = $("<i class='fa fa-chevron-left'></i>");

	state.selectedStation.products.forEach((elem)=>{
		let product = $("<div class='product'>"+elem+"</div>");
		containerProduct.append(product);
	});

	ancla.append(iconRegresar);

	detailsStation.append(name);
	detailsStation.append(address);
	detailsStation.append(containerProduct);
	detailsStation.append(ancla);

	ancla.on('click',(e) => {
		e.preventDefault();
		state.selectedStation = null;
		update();
	})
	
	return detailsStation;
};