// POPULAR MOVIES OUT NOW SLIDESHOW
let slideIndex = 0;
slidesBanner();

function slidesBanner() {
  let i;
  let backgroundSlides = document.getElementsByClassName("background-slide");

  if (backgroundSlides.length === 0) {
    return; // Exit if there are no slides
  }

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

// DARK AND LIGHT MODE SWITCH
const toggleContainer = document.querySelector(".toggle-switch");
const toggle = document.querySelector('.toggle-switch input[type="checkbox"]');
const logo = document.querySelector("#logo");
const label = document.querySelector("#toggle-switch-label");

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
  toggle.checked = true;
  document.documentElement.setAttribute("theme", "light");
  logo.src = "images/movie-night-logo-black.png";
  label.textContent = "DARK MODE";
} else {
  toggle.checked = false;
  document.documentElement.setAttribute("theme", "dark");
  logo.src = "images/movie-night-logo-white.png";
  label.textContent = "LIGHT MODE";
}

function relayEvent(event) {
  const customEvent = new CustomEvent("dark-mode:toggle", {
    bubbles: true,
    detail: { checked: event },
  });
  localStorage.setItem("theme", event ? "light" : "dark");
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