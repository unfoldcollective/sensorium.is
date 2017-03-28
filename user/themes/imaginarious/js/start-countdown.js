document.addEventListener("DOMContentLoaded", function(){
    console.log("countdown.js!")
    var finalDate = "2017/03/31 23:59:59";

    $('div#clock').countdown('2017/04/01')
    .on('update.countdown', function(event) {
        var format = '%H:%M:%S';
        if(event.offset.totalDays > 0) {
            format = '%-d day%!d ' + format;
        }
        if(event.offset.weeks > 0) {
            format = '%-w week%!w ' + format;
        }
        $(this).html(event.strftime(format));
    });
    
    console.log("countdown initialised")

});