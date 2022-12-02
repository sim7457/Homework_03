$(function () {

    var carName = ['Vantage', 'DB11', 'DBS', 'DBX', 'DBX707', 'Valkyrie']



    $('.mainSlide').on('init afterChange', function (s, e, c) {
        var _this = $('.mainSlide .slick-current');
        _this.addClass('on').siblings().removeClass('on');
        $('.slide_nav li').eq(c).addClass('on').siblings().removeClass('on');
        $('.carName').text(carName[c]);


    })


    $('.mainSlide').slick({
        //dots: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });






    $('.slide_nav li').on('click', function (e) {
        e.preventDefault();
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.mainSlide').slick('slickGoTo', idx)
    });

    $('.scroll-down i').on('click', function () {
        var sct = $('.con-block').offset().top
        $('html,body').animate({ scrollTop: sct }, 600)
    })

    $('.bottom .right').on('click', function () {
        var sct = $('.mainSlide').offset().top
        $('html,body').animate({ scrollTop: sct }, 600)
    })
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('on')

        } else {
            $('.header').removeClass('on')
        }
    });
});
