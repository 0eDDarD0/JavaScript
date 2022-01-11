$(document).ready(function(){

    setInterval(() => {
        
        if($('input[type=password]').val().length > 8){
            $('div').text('Muy segura').css({'color' : 'green'});
        }else if($('input').val().length >= 5){
            $('div').text('Segura').css({'color' : 'orange'});
        }else{
            $('div').text('Contraseña no valida').css({'color' : 'red'});
        }

    }, 100);
});