var isTouch = window.DocumentTouch && document instanceof DocumentTouch;

function dimBackground($container) {
    var zvalue = $container.scrollTop();
    if ( zvalue > 800 )
        $container.addClass("scrolled");
    else
        $container.removeClass("scrolled");
}

jQuery(document).ready(function($){
    var $container = $('#sb-site');
    // ON SCROLL EVENTS
    if (!isTouch){
        $container.scroll(function() {
            dimBackground($container);
        });
    };

    // TOUCH SCROLL
    $container.on({
        'touchmove': function(e) {
            dimBackground($container);
        }
    });
});


