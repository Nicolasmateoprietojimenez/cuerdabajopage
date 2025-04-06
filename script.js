var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: false,
  initialSlide: 1,
  coverflowEffect: {
    rotate: 15,
    stretch: 0,
    depth: 400,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2, // en móviles pequeños
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    }
  }
});

