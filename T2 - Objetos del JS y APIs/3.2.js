function whatCases(cad){

    let mayus = true;
    let minus = true;

    for(let i = 0 ; i < cad.length ; i++){

        console.log(i);
        if(cad[i] == cad[i].toUpperCase())
            minus = false;
        else if(cad[i] == cad[i].toLowerCase())
            mayus = false;
    }

    if(mayus)
        return "La cadena solo tiene mayusculas";
    else if(minus)
        return "La cadena solo tiene minusculas";
    else
        return "La cadena tiene mayusculas y minusculas";
}


document.write(whatCases("HeHe"));