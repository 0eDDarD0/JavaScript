function noRepeat(...elem){

    let nuevo = [];

    for(i of elem){

        if (!nuevo.includes(i)){

            nuevo += i;
        }
    }

    return nuevo;
}

document.write(noRepeat(1,1,2,3,4,3,4,6,7,5,3))