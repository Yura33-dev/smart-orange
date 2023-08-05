const promoSlider = (sliderContent, slide, nextButton, prevButon, counter) => {
  const sliderWrapper = document.querySelector(sliderContent),
    nextBtn = document.querySelector(nextButton),
    prevBtn = document.querySelector(prevButon),
    slides = document.querySelectorAll(slide),
    slidesCounter = document.querySelector(counter);

  let slideIndex = 1;
  sliderWrapper.style.transform = `translateX(0)`;

  slidesCounter.lastElementChild.textContent =
    slides.length >= 10 ? `${slides.length}` : `0${slides.length}`;

  slidesCounter.firstElementChild.textContent = '01';
  const slidesWidth = 770;

  sliderWrapper.style.width = `${slidesWidth * slides.length}px`;

  const switchSlide = (n) => {
    if (n > 0) {
      if (slideIndex >= slides.length) {
        sliderWrapper.style.transform = `translateX(0)`;
        slideIndex = 1;
      } else {
        slideIndex += 1;
        sliderWrapper.style.transform = `translateX(-${
          slidesWidth * slideIndex - slidesWidth
        }px)`;
      }
    }

    if (n < 0) {
      if (slideIndex === 1) {
        sliderWrapper.style.transform = `translateX(-${
          slidesWidth * slides.length - slidesWidth
        }px)`;
        slideIndex = slides.length;
      } else {
        slideIndex -= 1;
        sliderWrapper.style.transform = `translateX(-${
          slidesWidth * slideIndex - slidesWidth
        }px)`;
      }
    }

    slidesCounter.firstElementChild.textContent =
      slideIndex >= 10 ? `${slideIndex}` : `0${slideIndex}`;
  };

  //
  nextBtn.addEventListener('click', () => switchSlide(1));
  prevBtn.addEventListener('click', () => switchSlide(-1));
};

export default promoSlider;
