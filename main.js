var currentSlideID = 1;

var sliderElement = document.getElementById('slider');
var totalSlides = sliderElement.childElementCount;

function nextSlide() {
    // var currentSlideID = 1;
    if (totalSlides > currentSlideID) {
        currentSlideID++;
        showSlide()

    }

}

function prevSlide() {
    if (currentSlideID > 1) {
        currentSlideID--;
        showSlide()
    }


}
function showSlide() {
    // var currentSlideID = 1
    var slides = document.getElementById('slider').getElementsByTagName('li')
    for (let index = 0; index < totalSlides; index++) {
        const element = slides[index];
        if (currentSlideID == index + 1) {
            element.classList.remove('hidden')
        } else {
            element.classList.add('hidden')
        }
    }

}

let defaultTransform = 0;
function goNext() {
    defaultTransform = defaultTransform - 398;
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}

function goPrev() {
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
