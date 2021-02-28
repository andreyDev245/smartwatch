$(document).ready(function(){
    $(".reviews_slider").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 2000,
        dots: true,
        checkVisibility: false
    });

    let reviewsLeftBtn = document.querySelector('.reviews_left_btn');
    let reviewsRightBtn = document.querySelector('.reviews_right_btn');
    reviewsLeftBtn.addEventListener('click', function(){
        $('.reviews_slider').trigger('prev.owl.carousel');
    });
    reviewsRightBtn.addEventListener('click', function(){
        $('.reviews_slider').trigger('next.owl.carousel');
    });
    // ======================================
    $(".products_slider").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        center: true,
        autoplay: false,
        autoplayTimeout: 2000,
        dots: true,
        checkVisibility: false,

        responsive: {
            0:{
                items: 1
            },
            551:{
                items: 2,
                center: false
            },
            821:{
                items: 3,
                center: true
            },
            1101: {
                items: 4,
                center: false
            },
            1401:{
                items: 5,
                center: true
            }
        }
    });

    let btnLeft = document.querySelector('.btnPrev');
    let btnRight = document.querySelector('.btnNext');
    btnLeft.addEventListener('click', function(){
        $('.products_slider').trigger('prev.owl.carousel');
    });
    btnRight.addEventListener('click', function(){
        $('.products_slider').trigger('next.owl.carousel');
    });
    // ====================================
    $(".blog_slider").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        center: true,
        autoplay: false,
        autoplayTimeout: 2000,
        dots: false,
        checkVisibility: false,
        responsive: {
            0:{
                items: 1,
                margin: 0,
                margin: 10,
                dots: true
            },
            801:{
                items: 2,
                center: false,
                margin: 15
            },
            1271:{
                items: 3
            }
        }
    });

    let blogPrevBtn = document.querySelector('.blog_prev_btn');
    let blogNextBtn = document.querySelector('.blog_next_btn');
    blogPrevBtn.addEventListener('click', function(){
        $('.blog_slider').trigger('prev.owl.carousel');
    });
    blogNextBtn.addEventListener('click', function(){
        $('.blog_slider').trigger('next.owl.carousel');
    });

});
