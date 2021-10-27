function coords(n){ //formatea un numero en coordenadas

    col = n % 10;
    row = (n - col) / 10;

    return [row, col];
}


var mapa = [
    [34,21,32,41,25],
    [14,42,43,14,31],
    [54,45,52,42,23],
    [33,15,51,31,35],
    [21,52,33,13,23]
];
var pos = [1,1];
var fin = false;

while(!fin){
    console.log(pos[0] + "" + pos[1]); //imprimo la posicion actual
    next = coords(mapa[pos[0] - 1][pos[1] - 1]); //obtengo y formateo la siguiente posicion
    if(pos[0] == next[0] && pos[1] == next[1]){ //si la siguiente y la actual son la misma entonces he llegado
        fin = true;
        console.log("El tesoro esta en la posicion 5,2");
    }else{
        pos = next; //si no he llegado voy a mi nueva posicion
    }
    
}
