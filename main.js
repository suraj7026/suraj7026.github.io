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
var sliderContainer = document.getElementById('sliderCOntainer');
var slider = document.getElementById('slider2');
var cards = slider.getElementsByTagName('li');

var elementsToShow = 4;
if (document.body.clientWidth < 1000) {
    elementsToShow = 1;
} else if (document.body.clientWidth < 1500) {
    elementsToShow = 2;
}
var sliderContainerWidth = sliderContainer.clientWidth;
var cardWidth = sliderContainerWidth / elementsToShow;

slider.style.width = cards.length * cardWidth + 'px';
slider.style.transition = 'margin';
slider.style.transitionDuration = '500ms'

for (let i = 0; i < cards.length; i++) {
    const element = cards[i];
    element.style.width = cardWidth + 'px';
}

function prevCard() {
    if (+slider.style.marginLeft.slice(0, -2) != -cardWidth * (cards.length - elementsToShow))
        slider.style.marginLeft = (+slider.style.marginLeft.slice(0, -2)) - cardWidth + 'px';
}
function nextCard() {
    if (+slider.style.marginLeft.slice(0, -2) != 0) {
        slider.style.marginLeft = (+slider.style.marginLeft.slice(0, -2)) + cardWidth + 'px';
    }
}
