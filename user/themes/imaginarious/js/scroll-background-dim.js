var isTouch = window.DocumentTouch && document instanceof DocumentTouch;

function dimBackground() {
    var zvalue = $(document).scrollTop();
    console.log(zvalue);
    if ( zvalue > 800 )
        $("#sb-site").addClass("scrolled");
    else
        $("#sb-site").removeClass("scrolled");
}

jQuery(document).ready(function($){

    // ON SCROLL EVENTS
    if (!isTouch){
        $(document).scroll(function() {
            dimBackground();
        });
    };

    // TOUCH SCROLL
    $(document).on({
        'touchmove': function(e) {
            dimBackground(); // Replace this with your code.
        }
    });
});


