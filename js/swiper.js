 var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 56,
        
        centeredSlides: true,
        initialSlide: 1,
        loop: true,
        autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
            reverseDirection: false
        },
        speed: 1000,
        breakpoints: {
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1023: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            }
        }
});

AOS.init()