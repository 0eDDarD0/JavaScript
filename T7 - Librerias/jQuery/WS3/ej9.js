$(document).ready(function(){

    $('button#inicio').click(function(){
        $('div').width(40)
                .height(40)
                .fadeIn('slow')
                .animate({left : '200px'})
                .css({'background-color' : 'blue'})
                .animate({bottom : '200px', opacity : 0}, 'slow');
    });
    $('button#fin').click(function(){
        $('div').stop(true);
    });
});

$.get()