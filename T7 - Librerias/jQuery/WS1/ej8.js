$(document).ready(()=>{

    let divs = $('div')
    divs.eq(0).css({'font-size' : '10px'});
    divs.eq(1).css({'font-size' : '20px'});
    divs.eq(2).css({'font-size' : '30px'});


    let titulos = $('h2');
    titulos.click(function(){

        $(this).next().toggle();
    });


    for(let i = 0 ; i < 3 ; i++){
        divs.eq(i).mouseover(function(){
            $(this).css({'background-color' : "rgb("+Math.floor(Math.random() * 256 + 1)+", "+Math.floor(Math.random() * 256 + 1)+", "+Math.floor(Math.random() * 256 + 1)+")"});
        });
        divs.eq(i).mouseleave(function(){
            $(this).css({'background-color' : "rgb(255, 255, 255)"});
        });
    }

});