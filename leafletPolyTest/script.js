var map = L.map('mapDiv').setView([51.505, -0.09], 13);
var track = [];
var line = new L.polyline([]).addTo(map);
var position =[];

var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 15,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

OpenStreetMap_Mapnik.addTo(map);


function onLocationFound(e) {
    if(e.coords.latitude !== position[0] ){
    position = [e.coords.latitude, e.coords.longitude];
    console.log(position);
    map.setView(position, 15, {
        animate: true
    });
    line.addLatLng(position);
    //map.fitBounds(line.getBounds() );
    }
}

//map.on('locationfound', onLocationFound);

//map.locate();

navigator.geolocation.watchPosition(onLocationFound);