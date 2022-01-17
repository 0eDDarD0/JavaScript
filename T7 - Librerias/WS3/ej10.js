$(document).ready(function(){

    $('input[type=password]').on('keyup', function(){
        if($(this).val().length > 8){
            $('div').text('Muy segura').css({'color' : 'green'});
        }else if($(this).val().length >= 5){
            $('div').text('Segura').css({'color' : 'orange'});
        }else{
            $('div').text('Contraseña no valida').css({'color' : 'red'});
        }
    });

});