var swiper = new Swiper(".mySwiper", {
    loop: true,
    loopFillGroupWithBlank: true,
  
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
    // when window width is >= 320px
    320: {
        slidesPerView: 1,
        spaceBetween: 24,
    },
    // when window width is >= 480px
    480: {
        slidesPerView: 1,
        spaceBetween: 24,
    },
    // when window width is >= 640px
    640: {
        slidesPerView: 1,
        spaceBetween: 64,
    },
    1024: {
        slidesPerView: 1,
        spaceBetween: 120,
        slidesPerGroup: 1,
    },
    1336: {
        slidesPerView: 1,
        spaceBetween: 500,
    },
    2000: {
        slidesPerView: 1,
        spaceBetween: 700,
    }
}
});