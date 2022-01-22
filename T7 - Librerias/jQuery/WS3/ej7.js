$(document).ready(function(){

    let divs = $('div');
    let anims = [{width : '300px'},
                {height : '20px'},
                {width : '1000px'},
                {height : '200px'}];

    $('button#inicio').click(function(){
        divs.eq(0).animate(anims[0], 'slow');
        divs.eq(1).animate(anims[1], 'slow');
        divs.eq(2).animate(anims[2], 'slow');
        divs.eq(3).animate(anims[3], 'slow');
    });
    $('button#fin').click(function(){
        divs.stop();
    });
});