// POPULAR MOVIES OUT NOW SLIDESHOW
let slideIndex = 0;
slidesBanner();

function slidesBanner() {
  let i;
  let backgroundSlides = document.getElementsByClassName("background-slide");

  for (i = 0; i < backgroundSlides.length; i++) {
    backgroundSlides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > backgroundSlides.length) {
    slideIndex = 1;
  }

  backgroundSlides[slideIndex - 1].style.display = "block";
  setTimeout(slidesBanner, 10000); // changes the image every 10 seconds
}

// HORIZONTAL SLIDER
document
  .querySelectorAll(".horizontal-slider-gallery-wrap")
  .forEach((slider) => {
    let scrollContainer = slider.querySelector(".horizontal-slider-gallery");
    let backButton = slider.querySelector(".left-arrow");
    let forwardButton = slider.querySelector(".right-arrow");
    const scrollAmount = 900;

    forwardButton.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    backButton.addEventListener("click", () => {
      scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    scrollContainer.addEventListener("scroll", () => {
      const limitBackButton =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;

      backButton.style.display =
        scrollContainer.scrollLeft > 0 ? "flex" : "none"; // show left arrow after a scroll right happens
      forwardButton.style.display =
        scrollContainer.scrollLeft >= limitBackButton - 5 ? "none" : "flex"; // hide right arrow when done scrolling
    });
  });

// DARK AND LIGHT MODE SWITCH
const toggleContainer = document.querySelector(".toggle-switch");
const toggle = document.querySelector('.toggle-switch input[type="checkbox"]');
const logo = document.querySelector("#logo");
const label = document.querySelector("#toggle-switch-label");

function relayEvent(event) {
  // event.stopPropagation();

  const customEvent = new CustomEvent("dark-mode:toggle", {
    bubbles: true,
    detail: { checked: event },
  });
  toggleContainer.dispatchEvent(customEvent);
}

toggleContainer.addEventListener("click", (e) => {
  if (e.target.tagName !== "INPUT") {
    e.preventDefault();
    toggle.checked = !toggle.checked;
  }

  relayEvent(toggle.checked);
});

document.body.addEventListener("dark-mode:toggle", (e) => {
  const isChecked = e.detail.checked;

  if (isChecked) {
    document.documentElement.setAttribute("theme", "light");
    logo.src = "images/movie-night-logo-black.png";
    label.textContent = "DARK MODE";
  } else {
    document.documentElement.setAttribute("theme", "dark");
    logo.src = "images/movie-night-logo-white.png";
    label.textContent = "LIGHT MODE";
  }
});

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