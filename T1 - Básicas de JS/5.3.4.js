precio = window.prompt("precio");
hermanos = window.prompt("hermanos");

if(hermanos == 0){
    alert(precio);
}else if(hermanos < 3){
    alert(precio - precio * 0.05);
}else if(hermanos >= 3){
    alert(precio - precio * 0.15);
}