c = parseInt(window.prompt("Num de columnas"));
f = parseInt(window.prompt("Num de filas"));
height = parseInt(window.prompt("Alto"));
width = parseInt(window.prompt("ancho"));

document.write(`<table border = solid black>`);
var i = 0;
for(let i = 0 ; i < f ; i++){

    document.write(`<tr height = ${height}>`)
    for(let j = 0 ; j < c ; j++){
    
        document.write(`<td width = ${width} ></td>`);
    }
    document.write("</tr>");
}
document.write("</table>");