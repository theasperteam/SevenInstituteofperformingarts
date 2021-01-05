let navbar = $(".navbar");

$(window).scroll(function() {

    if ($(window).scrollTop() > 20) {
        navbar.addClass("sticky");
        console.log("jhjhj");
    } else {
        navbar.removeClass("sticky");
    }
});