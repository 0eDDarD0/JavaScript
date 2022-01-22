$(document).ready(function(){

    let divs = $('div');

    $('button#inicio').click(function(){
        divs.eq(0).fadeIn('slow');
        divs.eq(1).fadeIn('fast');
        divs.eq(2).fadeIn(800);
        divs.eq(3).fadeIn(2000);
        divs.eq(4).fadeIn(4000);
    });
    $('button#fin').click(function(){
        divs.stop();
    });
});