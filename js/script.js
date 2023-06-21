new Swiper('.certificates-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    simulateTouch: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    spaceBetween: 45,
});
