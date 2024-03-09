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