if (document.querySelector('.media__slider')) {
    let mediaSlider = new Swiper(".media__slider", {
        spaceBetween: 60,
        
        navigation: {
            nextEl: ".arrows-item-media--next",
            prevEl: ".arrows-item-media--prev",
          },
    });
}