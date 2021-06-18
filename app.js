const slides = document.querySelectorAll('[data-js="carousel__item"]')
const nextButton = document.querySelector('[data-js="carousel__button--next"]')
const prevButton = document.querySelector('[data-js="carousel__button--prev"]')

let indexCurrentSlide = 0

nextButton.addEventListener('click', () => {
    if(indexCurrentSlide === slides.length -1){
        indexCurrentSlide = 0
    }else{
        indexCurrentSlide++
    }

    slides.forEach(slide => {
        slide.classList.remove('carousel__item--visible')
    })

    slides[indexCurrentSlide].classList.add('carousel__item--visible')
})

prevButton.addEventListener('click', () => {
    if(indexCurrentSlide === 0){
        indexCurrentSlide = slides.length - 1
    }else {
        --indexCurrentSlide
    }
    slides.forEach(slide => {
        slide.classList.remove('carousel__item--visible')
    })

    slides[indexCurrentSlide].classList.add('carousel__item--visible')
})