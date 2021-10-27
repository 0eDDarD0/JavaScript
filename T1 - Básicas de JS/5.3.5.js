e1 = window.prompt("examen 1");
e2 = window.prompt("examen 2");
t1 = window.prompt("trabajo 1");
t2 = window.prompt("trabajo 2");

if(e1 >= 4.5 && e2 >= 4.5 && t1 >= 4.5 && t2 >= 4.5){
    e = ((e1 + e2) / 2) * 0.75;
    t = ((t1 + t2) / 2) * 0.25;
    if(e + t >= 5){
        alert("aprobado");
    }else{
        alert("suspenso");
    }
}else{
    alert("suspenso");
}