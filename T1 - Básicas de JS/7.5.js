function sumImpares(...num){
    
    sum = 0;

    for(let i = 0 ; i < num.length ; i++){
        
        if(i % 2 == 0){

            sum += num[i];
        }
    } 

    return sum;
}

document.write(sumImpares(1, 4, 6, 10));