window.addEventListener('scroll', function () { // this part is for header
    if (window.scrollY > 0) {
        $('.navbar').removeClass('bg-transparent');
        $('.navbar').addClass('bg-body');
        $('.navbar').addClass('shadow');
    } else {
        $('.navbar').addClass('bg-transparent');
        $('.navbar').removeClass('bg-body');
        $('.navbar').removeClass('shadow');
    }
});

$(function () {
    $(".customer-action").owlCarousel({
        items:1,
        loop:true,
        dots:true,
    });
    let maxHeight = 0;

    // Calculate the max height of slides
    $('.customer-slide-item').each(function() {
        const slideHeight = $(this).outerHeight();
        if (slideHeight > maxHeight) {
            maxHeight = slideHeight;
        }
    });

    // Set all slides to the max height
    $('.customer-slide-item').each(function() {
        $(this).height(maxHeight);
    });
});