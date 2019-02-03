(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a[href*="#"]:not([href="#"])').click(function(e) {
        e.preventDefault();
        var targetElem = $($(this).attr('href'));
        console.log(targetElem[0].id);
        window.location.hash  = targetElem[0].id;
        $('html, body').animate({
            scrollTop: $(targetElem).offset().top
        }, 'slow');
    });

    // Closes responsive menu when a link is clicked
    $('.navbar-collapse>ul>li>a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

    // Parallax
    $(window).scroll(function() {
        var depth, i, layer, layers, len, movement, topDistance, translate3d, index;
        topDistance = this.pageYOffset;
        layers = document.querySelectorAll("[data-type='parallax']");
        for (i = 0, len = layers.length; i < len; i++) {
            layer = layers[i];
            depth = layer.getAttribute('data-depth');
            index = layer.getAttribute('data-zindex');
            movement = -(topDistance * depth);
            translate3d = 'translate3d(0, ' + movement + 'px, 0)';
            layer.style['-webkit-transform'] = translate3d;
            layer.style['-moz-transform'] = translate3d;
            layer.style['-ms-transform'] = translate3d;
            layer.style['-o-transform'] = translate3d;
            layer.style.transform = translate3d;
        }
    });



})(jQuery); // End of use strict


