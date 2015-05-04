var $window = $(window),
    win_height_padded = $window.height() * 1.1;
//       isTouch           = Modernizr.touch;


$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - $('#access').height())
                }, 1000);
                return false;
            }
        }
    });
});

var num = 200; //number of pixels before modifying styles

$window.bind('scroll', function() {
    var scrolled = $window.scrollTop();

    if (scrolled > num) {
        $('#access').addClass('fixed');
        $('#access').prev().addClass('menucompensation');
    } else {
        $('#access').removeClass('fixed');
        $('#access').prev().removeClass('menucompensation');
    }

    $(".revealOnScroll:not(.animated)").each(function() {
        var $this = $(this),
            offsetTop = $this.offset().top;

        if (scrolled + win_height_padded > offsetTop) {
            if ($this.data('timeout')) {
                setTimeout(function() {
                    $this.addClass('animated');
                }, parseInt($this.data('timeout'), 10));
            } else {
                setTimeout(function() {
                    $this.addClass('animated');
                }, 500);
            }
        }
    });
});
