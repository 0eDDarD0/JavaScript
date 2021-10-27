function megaArray(...arrays){

    nuevo = [];

    for(let i of arrays){

        nuevo.unshift(...i);
    }

    return nuevo;
}

a = megaArray([1,2,3,4,5], [true,false,false], [1.2,2.3,3.4], ["una","cadena"]);
document.write(a);