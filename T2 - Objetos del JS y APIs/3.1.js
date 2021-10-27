function invierteCadena(cad){

    nueva = "";

    for(let i = cad.length - 1 ; i >= 0 ; i--){

        nueva += cad[i]
    }

    return nueva;
}

function inviertePalabras(cad){

    separadas = cad.split(" ");

    for(let i = 0 ; i < separadas.length ; i++)
        separadas[i] = invierteCadena(separadas[i]);

    return separadas.join(" ");
}

function palabraMasLarga(cad){

    separadas = cad.split(" ");
    winner = 0;

    for(let i = 0 ; i < separadas.length ; i++){

        if(separadas[i].length > winner)
            winner = separadas[i].length;
    }

    return winner;
}

function filtraPalabraMasLarga(cad, lim){

    separadas = cad.split(" ");
    total = 0;

    for(let i = 0 ; i < separadas.length ; i++){

        if(separadas[i].length > lim)
            total++;
    }

    return total;
}

function properlyFormat(cad){

    nueva = "";

    for(let i = 0 ; i < cad.length ; i++){

        if(i == 0){
            nueva += cad[i].toUpperCase();
        }else{
            nueva += cad[i].toLowerCase();
        }
    }

    return nueva;
}


a = "12345";
a = invierteCadena(a);
document.write(a);

b = "hola chavales esto es una prueba";
b = inviertePalabras(b);
document.write("<br>" + b);
document.write("<br>" + palabraMasLarga(b));
document.write("<br>" + filtraPalabraMasLarga(b, 3));

c = "hoI AHHJjhdiE";
document.write("<br>" + properlyFormat(c));