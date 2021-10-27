function sumaTodo(...numeros){

    let result = 0;
    for(let i of numeros){

        if(typeof(i) == "number")
            result += i;
    }

    return result;
}

document.write(sumaTodo(1,2,"hola",4,5,6,7,8,9,12,true,56,78,100));