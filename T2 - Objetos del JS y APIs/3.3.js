function allSubStrings(cad, sub){

    apar = 0;
    j = 0;
    tam = sub.length;

    for(let i = 0 ; i < cad.length ; i++){

        if(cad[i] == sub[j]){

            j++;
            tam--;

            if(tam == 0){

                apar++;
                tam = sub.length;
                j = 0;
            }
        }
    }

    return apar;
}


document.write(allSubStrings("hola hola hola" , " "));