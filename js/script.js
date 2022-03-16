$(document).ready(function(){
	/*Feature Carousel*/
    $('.feature-content').owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        autoplay: true,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            767: {
                items: 4,
            },
            575: {
                items: 3,
            },
            320: {
                items: 2,
            },
        },
    });
	
    /*event Carousel*/
    $('.event-carousel').owlCarousel({
        items: 2,
        margin: 20,
        loop: true,
        autoplay: true,
        mouseDrag: true,
        touchDrag: true,
        smartSpeed: 3000,
        responsive: {
            768: {
                items: 2,
            },
            767: {
                items: 1,
            },
            320: {
                items: 1,
            },
        },
    });
    
    /*Country Carousel*/
    $('.country-carousel').owlCarousel({
        items: 3,
        margin: 20,
        loop: true,
        autoplay: true,
        mouseDrag: true,
        touchDrag: true,
        smartSpeed: 1000,
        responsive: {
            767: {
                items: 3,
            },
            575: {
                items: 2,
            },
            320: {
                items: 1,
            },
        },
    });
    
    /*Scroll-top*/
    $(window).on("scroll", function(){
        var scroll = $(window).scrollTop();
        if(scroll >= "80"){
            $('.header').addClass('sticky');
        }else{
            $('.header').removeClass('sticky');
        }
    });
    
    $('.mobile-menu').click(function(){
        $('.main-menu').slideToggle();
        $('.main-menu').toggleClass('slide-up');
        $('.mobile-menu').toggleClass('open');
    });
    
    $('.main-menu ul li a').click(function(){
        $('.main-menu.slide-up').slideUp();
        $('.main-menu').removeClass('slide-up');
        $('.mobile-menu').removeClass('open');
    });
    
    
});