$(function() {
    $(".icon-menu").click(function() {
        var top = $('.menu-list').css('top');
        if (top == '0px') {
            $('.icon-close').removeClass('block').addClass('none');
            $('.icon-open').removeClass('none').addClass('block');
            $(".menu-list, .background-menu").animate({
                'top': '-100vh',
                'opacity': 0
            }, {
                duration: 'slow'
            });
            $('body').removeClass('overflow');
        } else {
            $('.icon-open').removeClass('block').addClass('none');
            $('.icon-close').removeClass('none').addClass('block');
            $(".menu-list, .background-menu").animate({
                'top': 0,
                'opacity': 1
            }, {
                duration: 'slow'
            });
            $('body').addClass('overflow');
        };
    });
});
