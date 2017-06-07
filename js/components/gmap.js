'use strict';
const init = (parent) =>{
  const latStation = state.selectedStation.lat;
  const longStation = state.selectedStation.long;
  const map = new GMaps({
    el: parent,
    lat: latStation,
    lng: longStation
  });

  map.addMarker({
    lat: latStation,
    lng: longStation,
    zoom: 13
  });
  /*Ubicarme*/
  $(document).ready(function(){
    GMaps.geolocate({
    success: function(position) {
      map.setCenter(position.coords.latitude, position.coords.longitude);
      map.setZoom(14);

      map.addMarker({
        lat: position.coords.latitude,
        lng: position.coords.longitude     
      });
      map.drawRoute({
        origin: [position.coords.latitude, position.coords.longitude],
        destination: [latStation, longStation],
        travelMode: 'driving',
        strokeColor: '#FF00FF',
        strokeOpacity: 0.6,
        strokeWeight: 6
      }); 
   
    },
    error: function(error) {
      alert('Geolocation failed: '+error.message);
    },
    not_supported: function() {
      alert("Your browser does not support geolocation");
    }
  });
});
  
}

const Gmap = _=>{
  const containerMap = $("<div id='map'></div>");
  containerMap.init = init.bind(null,containerMap.get(0));

  return containerMap;
};






 

  