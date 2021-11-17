//Diseña una web que hará uso de cookies para guardar el nombre del usuario.
//En caso de no tener ninguna cookie de ese sitio, deberá preguntar el nombre del usuario y
//almacenarlo en una cookie que caducará en 5 minutos. Tras esto saludará al usuario mediante un mensaje en pantalla.
//En caso de tener ya creada la cookie deberá leerla y mostrar el mensaje anterior directamente.
//Deberá proporcionar también un enlace para borrar la cookie (lo que podríamos llamar 'Cerrar Sesión').

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
    let a = readCookie("nombre");
    let body = document.querySelector("h1");
    if(a){
        body.innerHTML = "hola " + a;
    }else{
        a = window.prompt("Cual es tu nombre?: ");
        document.cookie = "nombre=" + a + "; max-age=300;";
        body.innerHTML = "hola " + a;
    }   

    let borrado = document.querySelector('#borrado');
    borrado.addEventListener('click', (e)=>{
        document.cookie = "nombre=; max-age=0";
        location.reload();
    });
}
window.addEventListener('load', main);
