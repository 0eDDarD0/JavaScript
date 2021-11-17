//Mejora el ejercicio anterior dando al usuario las opciones para que pueda configurar
//el color de fondo, de párrafo y el tamaño de la letra

function readCookie(name){

    var nameEQ = name + "="; 
    var cookies = document.cookie.split(';');
  
    for(var i = 0 ; i < cookies.length ; i++){
        var c = cookies[i];
        while (c.charAt(0) == ' '){
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0){
            return decodeURIComponent(c.substring(nameEQ.length,c.length) );
        }
    }
  
    return null;
}
function main(){
    let nombre = readCookie("nombre");
    let color = readCookie("color");
    let backgroundColor = readCookie("backgroundColor");
    let size = readCookie("size");

    let h1 = document.querySelector("h1");
    let body = document.querySelector("body");

    if(nombre){
        h1.innerHTML = "hola " + nombre;
        h1.style.color = readCookie("color");
        h1.style.fontSize = readCookie("size");
        body.style.backgroundColor = readCookie("backgroundColor");

    }else{
        nombre = window.prompt("Cual es tu nombre?: ");
        color = window.prompt("Cual es tu color de letra?: ");
        backgroundColor = window.prompt("Cual es tu color de fondo?: ");
        size = window.prompt("Cual es tu tamaño de letra?: ");

        document.cookie = "nombre=" + nombre + "; max-age=300;";
        document.cookie = "color=" + color + "; max-age=300;";
        document.cookie = "backgroundColor=" + backgroundColor + "; max-age=300;";
        document.cookie = "size=" + size + "; max-age=300;";


        h1.innerHTML = "hola " + nombre;
        h1.style.color = readCookie("color");
        h1.style.fontSize = readCookie("size");
        body.style.backgroundColor = readCookie("backgroundColor");
        
    }   

    let borrado = document.querySelector('#borrado');
    borrado.addEventListener('click', (e)=>{
        document.cookie = "nombre=; max-age=0";
        document.cookie = "color=; max-age=0";
        document.cookie = "backgroundColor=; max-age=0";
        document.cookie = "size=; max-age=0";
        location.reload();
    });
}
window.addEventListener('load', main);
