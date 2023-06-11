currentSlideID = 1;

sliderElement = document.getElementById('slider');
totalSlides = sliderElement.childElementCount;

function next() {
    if (totalSlides > currentSlideID) {
        currentSlideID++;
        showSlide()

    }

}

function prev() {
    if (currentSlideID > 1) {
        currentSlideID--;
        showSlide()
    }


}
function showSlide() {
    slides = document.getElementById('slider').getElementsByTagName('li')
    for (let index = 0; index < totalSlides; index++) {
        const element = slides[index];
        if (currentSlide == index + 1) {
            element.classList.remove('hidden')
        } else {
            element.classList.add('hidden')
        }
    }

}