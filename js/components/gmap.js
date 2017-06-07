'use strict';
const init = (parent) =>{
  const map = new GMaps({
    el: parent,
    lat: state.selectedStation.lat,
    lng: state.selectedStation.long
  });

  map.addMarker({
    lat: state.selectedStation.lat,
    lng: state.selectedStation.long,
    zoom: 13
  });
}

const Gmap = _=>{
  const containerMap = $("<div id='map'></div>");
  containerMap.init = init.bind(null,containerMap.get(0));

  return containerMap;
};




 

  