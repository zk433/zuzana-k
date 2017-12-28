$(document).ready(function() {
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
        $('.nav-list').slideToggle();
        });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
    });
});