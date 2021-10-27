n = parseInt(window.prompt("Num de columnas"));
height = parseInt(window.prompt("Alto"));
width = parseInt(window.prompt("ancho"));

document.write(`<table border = solid black><tr height = ${height}>`);
for(let i = 0 ; i < n ; i++){

    if(i % 2 == 1)
        document.write(`<td width = ${width} ></td>`);
    else
        document.write(`<td width = ${width} style="background-color: black;"></td>`);
}