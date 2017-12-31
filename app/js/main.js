$(document).ready(function() {
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
        $('.nav-list').slideToggle();
        //$('#main, .hero, .navigation-footer, .copyright').toggleClass("none");
        
    });
    $('.nav-list li a').click(function(){
        $('.nav-list').toggle('active');
    });

    // Hamburger to X toggle - doesn't turn back to X when a link is clicked
    // $('#nav-toggle').on('click', function() {
    //     this.classList.toggle('active');
    // });

    


    /* Smooth scrolling */
    // Select all links with hashes
        $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                return false;
                } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
                };
            });
            }
        }
    });
});