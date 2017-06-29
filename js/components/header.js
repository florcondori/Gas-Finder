'use strict';

const Header = (update) => {
 	const header = $("<header></header>");
 	const title = $("<span>Gas Finder</span>");
	const ancla = $("<a id='regresar' href='#'></a>");
	const iconRegresar = $("<i class='fa fa-chevron-left'></i>");
	
	ancla.append(iconRegresar);
	header.append(title);
	header.append(ancla);

	if(state.selectedStation){
		ancla.show();
	}else{
		ancla.hide();
	}

	ancla.on('click',(e) => {
		e.preventDefault();
		state.selectedStation = null;
		update();
		console.log(update);
	});

	return header;
}
