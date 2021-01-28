
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/kirtibhandari/Mapping_Earthquakes/main/majorAirports.json"

//Grabbing our GeoJSON data
d3.json(airportData).then(function(data){
  console.log(data);
  //Creating a GeoJSON layer with retrieved data
  L.geoJSON(data,{
    // We turn each feature into a marker on the map.
      onEachFeature: function(feature,layer){
        console.log(layer);
        layer.bindPopup("<h4>Airport code: " + feature.properties.faa + "</h4><h4>Airport name: " + feature.properties.name + "</h4");
      }
  }).addTo(map);
});



