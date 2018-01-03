$(document).ready(function() {
    // Toggle open and close nav styles on click

    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
        $('.nav-list').slideToggle();        
    });
    $('.nav-list li a').click(function(){
        $('.nav-list').toggle();
    });

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

//retro clock function
/*
var hourHand = document.querySelector('.hours'),
minuteHand = document.querySelector('.minutes'),
secondHand = document.querySelector('.seconds');


function localTime() {
  var currentTime = new Date();
  
    // Seconds
  var seconds = currentTime.getSeconds();
  
  var secondDeg = ((seconds/60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;

  // Minutes
  var minutes = currentTime.getMinutes();
  
  var minuteDeg = ((minutes / 60) * 360) + ((seconds/60)*6);
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  
  
  // Hours
  var hours = currentTime.getHours();
  
  var hourDeg = ((hours/12)*360) + ((minutes/60) * 30);
    hourHand.style.transform = `rotate(${hourDeg}deg)`; 
    
} // end of localTime function

setInterval(localTime, 1000);

localTime();
*/