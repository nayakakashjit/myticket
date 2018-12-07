angular.module('myTicket', [
'ui.router',
'ui.carousel',
'myTicket.controllers', // main ctrl
'myTicket.router', 
'myTicket.services'    // services http
])


    .run(['Carousel', (Carousel) => {
        Carousel.setOptions({
            arrows: true,
            autoplay: false,
            autoplaySpeed: 3000,
            cssEase: 'ease',
            dots: false,

            easing: 'linear',
            fade: false,
            infinite: true,
            initialSlide: 0,

            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,

        });
}]);
