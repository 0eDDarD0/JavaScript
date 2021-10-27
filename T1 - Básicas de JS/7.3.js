function sumaTodo(...numeros){

    let result = 0;
    for(let i of numeros){

        result++;
    }

    return result;
}

document.write(sumaTodo(1,2,"hola",true,56,78,100));