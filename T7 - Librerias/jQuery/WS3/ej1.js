$(document).ready(()=>{

    let tabla = $('<table></table>');
    for(let i = 0 ; i < 8 ; i++){
        let fila = $('<tr><td>hola</td></tr>');
        if(i < 2){
            fila.css({'background-color' : 'red'});
        }else if(i > 2){
            fila.css({'background-color' : 'blue'});
        }
        fila.appendTo(tabla);
    }

    tabla.appendTo($('html'));

});
