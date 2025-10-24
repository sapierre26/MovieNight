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
    if (slideIndex > backgroundSlides.length) { slideIndex = 1 }

    backgroundSlides[slideIndex - 1].style.display = "block";
    setTimeout(slidesBanner, 10000); // changes the image every 10 seconds
}

// HORIZONTAL SLIDER
document.querySelectorAll(".horizontal-slider-gallery-wrap").forEach((slider) => {
    let scrollContainer = slider.querySelector(".horizontal-slider-gallery");
    let backButton = slider.querySelector(".left-arrow");
    let forwardButton = slider.querySelector('.right-arrow');
    const scrollAmount = 900;

    forwardButton.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    backButton.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    scrollContainer.addEventListener("scroll", () => {
        const limitBackButton = scrollContainer.scrollWidth - scrollContainer.clientWidth;

        backButton.style.display = scrollContainer.scrollLeft > 0 ? "flex" : "none"; // show left arrow after a scroll right happens
        forwardButton.style.display = scrollContainer.scrollLeft >= limitBackButton - 5 ? "none" : "flex"; // hide right arrow when done scrolling
    });
});

// DARK AND LIGHT MODE SWITCH
const toggle = document.querySelector('.toggle-switch input[type="checkbox"]');
const logo = document.querySelector('#logo');
const label = document.querySelector('#toggle-switch-label');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('theme', 'light');
        logo.src = 'images/movie-night-logo-black.png';
        label.textContent = 'DARK MODE';
    } else {
        document.documentElement.setAttribute('theme', 'dark');
        logo.src = 'images/movie-night-logo-white.png';
        label.textContent = 'LIGHT MODE';
    }
}

toggle.addEventListener('change', switchTheme, false);