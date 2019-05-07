$(function () {
    console.log("App started");
    $('.news__card_grid').flickity({
        groupCells: true,
        imagesLoaded: true
    });

    $('.image__gallery_grid').flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: true,
        selectedAttraction: 0.3,
        friction: 0.8,
        imagesLoaded: true
    });

    $('.institute__inner_grid').flickity({
        cellAlign: 'left',
        contain: true,
        imagesLoaded: true
    })

    $('.theme__block_item').click(function () {
        $('.theme__block_item.is-toggle-active').removeClass('is-toggle-active');
        $(this).addClass('is-toggle-active');
        var id = $(this).attr('data-tab');
        $('.theme__block_single_content').removeClass('is-content-active');
        $(`.${id}`).addClass('is-content-active');
    })



    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.header').addClass('active');
            $('.main_logo').addClass('active');
            $('.navbar .navbar-nav').addClass('active');
        } else {
            $('.main_logo').removeClass('active');
            $('.navbar .navbar-nav').removeClass('active');
            $('.header').removeClass('active');
        }
    })

    $('ul.navbar-nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).fadeIn(200);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).fadeOut(200);
    });

    $(".menu-toggle").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
        $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
        $(this).toggleClass("active");
    });

    $('.sidebar-nav-item').click(function () {
        $(this).find('i').toggleClass('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    // $('#sidebar-wrapper .js-scroll-trigger').click(function () {
    //     $("#sidebar-wrapper").removeClass("active");
    //     $(".menu-toggle").removeClass("active");
    //     $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    // });
});