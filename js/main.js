$(function(){

    // mobile menu

    let mobileMenuBtn = $('.mobile_menu_btn');
    let closeMobMenu = $('.close_mob_menu');
    let mobileMenu = $('.overlay');
    let mobListLink = $('.mob_list_link');

    $(mobileMenuBtn).on('click', function(){
        $(mobileMenu).addClass('mobile_menu--open');
        $('body').addClass('noscroll');
    });
    $(closeMobMenu).on('click', function(){
        $(mobileMenu).removeClass('mobile_menu--open');
        $('body').removeClass('noscroll');
    });

    $(mobListLink).on('click', function(){
        $(mobileMenu).removeClass('mobile_menu--open');
        $('body').removeClass('noscroll');
    });

    // features_list

    let featuresItemTitle = $('.features_item_title');
    let featuresItemText = $('.features_item_text');
 
    $(featuresItemTitle).on('click', function(){
        $(featuresItemText).slideUp(0).eq($(this).index());
        $(this).next().slideDown(0);
    });

    // arrow top
    let arrowTop = $('.arrow_top');
    $(window).on('scroll', function(){
        if($(this).scrollTop() >= 700){
            $(arrowTop).addClass('arrow_top--active');
        }else{
            $(arrowTop).removeClass('arrow_top--active');
        }
    });
    $(arrowTop).on('click', function () {
        $('html').animate({
            scrollTop: 0
        }, 1000);
    });

    // scroll more slowly

    let anchor = $('a[href$="anchor"]');
    $(anchor).on('click', function(evt){
		evt.preventDefault();
       let link = $(this).attr('href');
       $('html, body').animate({
            scrollTop : $(link).offset().top
       }, 1500)
    });

    // video block
    let overlayVideo = $('.overlay_video');
    $('.video_btn').on('click', function(){
        $(overlayVideo).addClass('overlay_video--open');
        $('body').addClass('noscroll');
    });

    $(overlayVideo).on('click', function(evt){
        $(overlayVideo).removeClass('overlay_video--open');
        $('body').removeClass('noscroll');
    });

    $('.video_box').on('click', function(evt){
        evt.stopPropagation();
    });

    $('.video_box').videoExtend({
        logoSize: [ 80, 40 ]
    });
});
