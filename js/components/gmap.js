'use strict';
const init = (parent) =>{
  const latStation = state.selectedStation.lat;
  const longStation = state.selectedStation.long;

  $(document).ready(function(){
    /*Dibujar mapa*/
    const map = new GMaps({
      el: parent,
      lat: latStation,
      lng: longStation
    });

    map.addMarker({
      lat: latStation,
      lng: longStation,
      zoom: 11
    });

    /*Ubicarme*/  
    GMaps.geolocate({
      success: function(position) {
        const miLat = position.coords.latitude;
        const miLong = position.coords.longitude;

        map.setCenter(miLat, miLong);
        map.setZoom(13);

        map.addMarker({
          lat: miLat,
          lng: miLong     
        });
        /*Dibujar ruta*/
        map.drawRoute({
          origin: [miLat, miLong],
          destination: [latStation, longStation],
          travelMode: 'driving',
          strokeColor: '#FF0000',
          strokeWeight: 6,
          
        });
        
        map.getRoutes({
          origin: [miLat, miLong],
          destination: [latStation, longStation],
          travelMode: 'driving',
          callback: function(e){
            var route = new GMaps.Route({
              map: map,
              route: e[0],
            });
            console.log(route.route.legs[0].distance.text);
            const km = route.route.legs[0].distance.text.replace(",",".").replace("km","KM");
            $("#km").text(km);
          }
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
  containerMap.initMap = init.bind(null,containerMap.get(0));

  return containerMap;
};






 

  