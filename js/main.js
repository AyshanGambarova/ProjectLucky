$(document).ready(function (e) {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 4
            }
        }
    })
 
});