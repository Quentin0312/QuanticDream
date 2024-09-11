// TODO : Rename properly
lat_lng = [47.64269230515288, 6.839473664773902];

// Set up the map
var map = L.map("map").setView(lat_lng, 16);

// Setup the tiles
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Add a pin to the map
var marker = L.marker(lat_lng).addTo(map);

// Add a popup to the pin to show address
marker.bindPopup("<b>Adresse :</b><br>20 chemin pot de fleur").openPopup();
