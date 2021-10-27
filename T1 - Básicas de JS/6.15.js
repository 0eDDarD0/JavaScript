solucion = parseInt(window.prompt("Numero a adivinar"));

fin = false;
while(!fin){

    let intento = parseInt(window.prompt("Intenta adivinar"));

    if(intento > solucion){
        console.log("La solucion es menor");
    }else if(intento < solucion){
        console.log("La solucion es mayor");
    }else{
        console.log("has acertado");
        fin = true;
    }
}