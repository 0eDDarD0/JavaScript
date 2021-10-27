salir = false;
while(!salir){
    
    a = parseInt(window.prompt("Cateto a"));
    b = parseInt(window.prompt("Cateto b"));

    c = Math.sqrt((a**2 + b**2));
    document.write(c + '<br>');

    if(window.prompt("Desea continuar? (Y)") != "Y"){

        salir = !salir;
    }

}