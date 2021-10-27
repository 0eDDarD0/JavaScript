n = parseInt(window.prompt("Num de columnas"));
height = parseInt(window.prompt("Alto"));
width = parseInt(window.prompt("ancho"));

document.write(`<table border = solid black><tr height = ${height}>`);
var i = 0;
while(i < n){

    if(i % 2 == 1)
        document.write(`<td width = ${width} ></td>`);
    else
        document.write(`<td width = ${width} style="background-color: black;"></td>`);
    i++;
}