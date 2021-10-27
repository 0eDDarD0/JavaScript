function largest(array){
    array.sort();
    return array[array.length - 1];
}

function largestStr(array){
    let indice = 0;
    let max = 0;
    array.forEach((v, i) => {
        if(v.length > max){
            max = v.length;
            indice = i;
        }
    });

    return array[indice];
}

function findEven(array){
    evens = [];

    array.forEach(element => {
        if(element % 2 == 0){
            evens.push(element);
        }
    });

    return evens;
}

function findOdd(array){
    evens = [];

    array.forEach(element => {
        if(element % 2 == 1){
            evens.push(element);
        }
    });

    return evens;
}

function findIs(array){
    palabras = [];

    array.forEach(element => {
        if(element.includes("is")){
            palabras.push(element);
        }
    });

    return palabras;
}

function div3(array){
    return array.every((element) => {
        return element % 3 == 0;
    })
}

function zip(a1, a2){
    return a1.map((v, i) => {
        return [v, a2[i]];
    });
}

function arraysSort(a){
    return a.sort((a, b) => {
        return a.length - b.length;
    });
}

function removeFirst(a){
    return a.reverse(a.pop(a.reverse()));
}

function addFirst(a, nuevo){
    a.unshift(nuevo);
}



nums = [0,9,4,3,2,7,8,5,6,1];
console.log(largest(nums));

strs = ["que hay de nuevo viejo?", "leiste",  "hola", "adios", "hasta luego", "pais"];
console.log(largestStr(strs));

console.log(findEven(nums));

console.log(findOdd(nums));

console.log(findIs(strs));

divs3 = [3,6,9,12,15];
console.log(div3(divs3));

negs = [0,-9,-4,-3,-2,-7,-8,-5,-6,-1];
console.log(zip(nums, negs));

arrays = [[1,3], [2,3,8,5,6], [6,5,4], [1,2,3,4,5,6,7,8], ["hola esta es una frase muy larga para despistar"]];
console.log(arraysSort(arrays));

test = ["sere eliminado", "sigo vivo", "yo tambien"];
console.log(removeFirst(test));

addFirst(test, "he vuelto")
console.log(test);
