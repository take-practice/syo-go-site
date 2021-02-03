 var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3.5,
        spaceBetween: 56,
        centeredSlides: true,
        initialSlide: 1,
        loop: true,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            reverseDirection: false
        },
        speed: 1000
});

AOS.init()