var pokemons = [ // nombre vida ataque defensa velocidad
    ["Bulbasaur", 100, 75, 90, 50], //315
    ["Charmander", 70, 100, 65, 90], //325
    ["Squirtle", 90, 80, 120, 55], //345
    ["Pikachu", 80, 80, 55, 115], //330
    ["Eevee", 60, 75, 80, 100], //315
]

pokemons.sort((a, b) => { //Por ataque descendente
    return b[2] - a[2];
});
  
console.log("Ordenados por ataque descendente");
console.log(pokemons);


// pokemons.sort((a, b) => { //Por nombre alfabeticamente

//     if(a[0].toLowerCase() > b[0].toLowerCase()){
//       return 1;
//     }
//     if(a[0].toLowerCase() < b[0].toLowerCase()){
//       return -1;
//     }

//     return 0;
// });

// console.log("Ordenados alfabeticamente");
// console.log(pokemons);


// pokemons.sort((a, b) => { // Por stats totales ascendentes

//     let sumA = a[1] + a[2] + a[3] + a[4];
//     let sumB = b[1] + b[2] + b[3] + b[4];

//     if(sumA > sumB){
//         return 1;
//     }
//     if(sumA < sumB){
//         return -1;
//     }
  
//     return 0;
// });

// console.log("Ordenados por estadisticas totales ascendentes");
// console.log(pokemons);
