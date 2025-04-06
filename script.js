var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 4,
  loop: false,
  initialSlide: 1,
  coverflowEffect: {
    rotate: 15,
    stretch: 0,
    depth: 400,
    modifier: 1,
    slideShadows: true,
  }
});
