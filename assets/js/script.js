(function ($) {
    "use strict";


    // Preloder

    $(window).on('load', function () {
        $('#status').fadeOut();
        $('#preloader').delay(500).fadeOut('slow');
        $('body').delay(500).css({ 'overflow': 'visible' });
    });

    // HEADER START

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 0) {
            $(".top-menu").addClass("sticky");
        } else {
            $(".top-menu").removeClass("sticky");
        }
    });


    // TOGGLER

    $(".navbar-toggler-icon").on("click", function () {
        $(".main-nav").fadeToggle("");
    });


    // INPUT BTN

    $('.show').on("click", function () {

        $('.search-box').fadeToggle("");
    });

    // Cart BTN



    //    PRODUCTS  START

    if ($('.slider').length > 0) {
        $(".slider").owlCarousel({
            loop: true,
            dots: true,
            autoplay: true,
            nav: true,
            navText: [
                "<i class='ti-angle-left'></i>",
                "<i class='ti-angle-right'></i>"
            ],
            items: 1
        });

    }
    // Branding

    $(".branding-slider").owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        navText: [
            "<i class='ti-angle-left'></i>",
            "<i class='ti-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            991: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // ----------WOW JS START------------------

    new WOW().init();

    // ----------WOW JS END------------------






})(jQuery);



