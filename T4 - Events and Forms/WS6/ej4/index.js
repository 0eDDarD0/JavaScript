function creaCookie(id, val, time){
    document.cookie = id + "=" + val + "; max-age=" + time + ";";
}

function leeCookie(name){
    var nameEQ = name + "="; 
    var cookies = document.cookie.split(';');
  
    for(var i = 0 ; i < cookies.length ; i++){
        var c = cookies[i];
        while (c[0] == ' '){
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0){
            return decodeURIComponent(c.substring(nameEQ.length,c.length) );
        }
    } 
    return null;
}

function borraCookie(name){
    document.cookie = name + "=; max-age=0;";
}