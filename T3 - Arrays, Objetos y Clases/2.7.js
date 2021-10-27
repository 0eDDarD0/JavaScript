function aCero(a){

    for(let i = 0 ; i < a.length ; i++)
        a[i] = 0;
}

function masUno(a){

    for(let i = 0 ; i < a.length ; i++)
        a[i]++;
}

function mostrar(a){

    for(let i = 0 ; i < a.length ; i++)
        document.write(a[i] + ' ');
    document.write('<br>');
}

nums = [0,1,2,3,4,5,6,7,8,9];
aCero(nums);
mostrar(nums);
masUno(nums);
mostrar(nums);