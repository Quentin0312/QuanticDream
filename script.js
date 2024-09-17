// Paris HQ infos
const paris_hq_lat_lng = [48.879884, 2.408803];
const paris_hq_infos =
  "<b>Quantic Dream - Paris, France</b><br>30 rue Raoul Wallenberg, 75019 Paris (France)<br>+33 1 44 64 00 90";

// Set up the map
var map = L.map("map").setView(paris_hq_lat_lng, 16);

// Setup the tiles
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Add a pin to the map
var marker = L.marker(paris_hq_lat_lng).addTo(map);

// Add a popup to the pin to show address
marker.bindPopup(paris_hq_infos).openPopup();
