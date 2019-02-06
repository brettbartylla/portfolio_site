
$(document).on('turbolinks:load', function() {
   
    //link scroll animations
    $(".btn-my-work").click(function(e) {
        //fixes flash onclick
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about-section").offset().top-50
        }, 1200);
    });
    $(".about-link").click(function(e) {
        //fixes flash onclick
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about-section").offset().top-50
        }, 1200);
    });
    $(".portfolio-link").click(function(e) {
        //fixes flash onclick
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#my-work").offset().top+20
        }, 1200);
    });

    $(".double-chevron").click(function(e) {
        //fixes flash onclick
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#home").offset().top-50
        }, 1200);
    });

});