// FILM MAP
if (document.getElementById("film-map")) {
  const map = L.map("film-map", {
    worldCopyJump: false,
    maxBoundsViscosity: 1.0, 
  }).setView([40, -95], 3);

  const bounds = L.latLngBounds([[-90, -180], [90, 180]]);
  map.setMaxBounds(bounds);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    noWrap: true,        
    bounds: [[-90, -180], [90, 180]],
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  }).addTo(map);

  const locationPin = L.divIcon({
      html: '<svg class="icon" id="location-pin"><use href="icons/movie-night.svg#icon-location-pin"></use></svg>',
      className: "icon-marker",
      iconSize: [28, 28],
      iconAnchor: [14, 28], // anchor the bottom tip at the marker's coordinates
      popupAnchor: [0, -28],
  });

  const markers = [
    { coords: [34.0522, -118.2437], text: "Los Angeles: A city of angels." },
    { coords: [40.7128, -74.006], text: "New York: The city that never sleeps." },
    { coords: [51.5074, -0.1278], text: "London: The capital of England." },
  //   { coords: [41.8818, -81.6231], text: "Chicago: The windy city." },
  ];

  markers.forEach((pin) => {
    const marker = L.marker(pin.coords, {icon: locationPin }).addTo(map);
    marker.bindPopup(pin.text);

    marker.on("mouseover", function (e) {
      this.openPopup();
    });
    marker.on("mouseout", function (e) {
      this.closePopup();
    });
  });
}