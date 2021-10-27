function potencia(base, exp){

    if(exp == 0){
        return 1;
    }else{
        return base * potencia(base, exp - 1);
    }
}

document.write(potencia(2, 4));