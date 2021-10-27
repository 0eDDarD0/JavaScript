n = parseInt(window.prompt("Num de columnas"));
height = parseInt(window.prompt("Alto"));
width = parseInt(window.prompt("ancho"));

document.write(`<table border = solid black><tr height = ${height}>`);
var i = 0;
while(i < n){

    document.write(`<td width = ${width} ></td>`);
    i++;
}