$(document).ready(()=>{
    
    let celdas = $('td');
    for(let i = 0 ; i < celdas.length ; i++){
        if(celdas.eq(i).html() == ''){
            celdas.eq(i).css({'background-color' : 'yellow'});
        }
}
});