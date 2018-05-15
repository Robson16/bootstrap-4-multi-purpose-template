$('.testimonial-carousel').owlCarousel({
    loop: true,
    responsive: {
        0: {
            items: 1
        }
    }
});

$('.blog-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 3
        }
    }
});