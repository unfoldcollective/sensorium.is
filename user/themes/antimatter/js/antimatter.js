var isTouch = window.DocumentTouch && document instanceof DocumentTouch;

function scrollHeader($container) {
    // Has scrolled class on header
    var zvalue = $container.scrollTop();
    if ( zvalue > 75 )
        $("#header").addClass("scrolled");
    else
        $("#header").removeClass("scrolled");
}

jQuery(document).ready(function($){

    var $container = $('#sb-site');
    
    // ON SCROLL EVENTS
    if (!isTouch){
        $container.scroll(function() {
            scrollHeader($container);
        });
    };

    // TOUCH SCROLL
    $container.on({
        'touchmove': function(e) {
            scrollHeader($container); // Replace this with your code.
        }
    });

    //Smooth scroll to top
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
    // Responsive Menu

});


