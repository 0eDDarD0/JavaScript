function sumaTodo(...numeros){

    let result = 0;
    for(let i of numeros){

        result += i;
    }

    return result;
}

document.write(sumaTodo(1,2,3,4,5,6,7,8,9,12,43,56,78,100));