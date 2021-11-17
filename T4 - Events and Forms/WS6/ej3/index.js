//¿Cómo podemos hacer que la segunda cookie se borre automáticamente al cerrar el navegador? Compruébalo.

window.addEventListener('beforeunload', (e)=>{

    let a = document.cookie.split(';')[1];
    let nombre = "";
    let salir = false;
    for(let i = 0 ; i < a.length && !salir ; i++){
        if(a[i] != '='){
            nombre += a[i]
        }else{
            salir = true;
        }
    }
    document.cookie = nombre + "=; max-age=0;";
});

document.cookie = "nombre=usuario; max-age=60";
document.cookie = "password=1234; max-age=60";