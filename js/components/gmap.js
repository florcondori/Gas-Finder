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
    title: state.selectedStation.name,
    zoom: 13
  });
}

const Gmap = ()=>{
  const containerMap = $("<div id='map'></div>");
  containerMap.init = init.bind(null,containerMap.get(0));

  return containerMap;
};




 

  