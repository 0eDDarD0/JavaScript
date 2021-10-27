names = ["Fernando Lopez Reina", "Juan Manuel Utrera Garcia", "Aitor Rolando Sanchez", "Daniel Dominguez Romero", "Juan Jose Lopez Reina"];
initials = [];

names.forEach((v, i) => {
    if(v[0] == "J"){ //Comprueba que el nombre empieza por J
        sueltos = v.split(" "); //separa los apellidos y los nombres
        nuevo = "";
        sueltos.forEach((v, i) => {
            nuevo += v[0]; //para cada palabra coge la primera letra
        });
        initials.push(nuevo); // añade las iniciales al conjunto
    }
});

console.log(initials.sort());