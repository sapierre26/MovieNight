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