$(function() {
    // hide read more button content that is not collapsed
    $('.collapsible').each(function() {
        if ($(this).is(":visible"))
            $(this).siblings('a.show-collapsed-link').css("opacity", 0);
    });

    $('.collapse-class').click(function() {
        $(this).children('.collapsible').slideToggle(500, function() {
            if ($(this).is(":visible")) {
                $(this).siblings('a.show-collapsed-link').animate({
                    opacity: 0
                }, 100);
            } else
                $(this).siblings('a.show-collapsed-link').animate({
                    opacity: 1
                }, 100);
        });
    });

    $('a.show-collapsed-link').click(function(event) {
        event.preventDefault();
    });
});
