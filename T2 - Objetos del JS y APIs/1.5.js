function reloj(){
    
    a = new Date();
    document.body.innerHTML = (a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds());
    setTimeout(reloj, 1000);
}

setTimeout(reloj, 1000);
