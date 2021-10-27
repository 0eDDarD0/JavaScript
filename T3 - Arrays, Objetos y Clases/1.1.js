function mayor4(n1, n2, n3, n4){

    max = 0;
    for(let i = 0 ; i < 3 ; i++){
        if(arguments[i] > max)
            max = arguments[i];
    }

    return max;
}

document.write(mayor4(6, 2, 5, 4));