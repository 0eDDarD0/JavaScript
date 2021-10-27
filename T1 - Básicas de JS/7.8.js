function sumSquare(...nums){

    sumatorio = 0;

    for(let i of nums){

        sumatorio += i**2;
    }

    return sumatorio;
}

document.write(sumSquare(4,2,3));