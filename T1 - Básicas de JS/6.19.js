tam = parseInt(window.prompt("Tamaño de celdas"));

document.write("<table border = solid>");
for(let i = 0 ; i < 8 ; i++){

    document.write(`<tr height = ${tam}>`);
    for(let j = 0 ; j < 8 ; j++){

        if(i % 2 == 0)
            if(j % 2 == 1)
                document.write(`<td width = ${tam}></td>`);
            else
                document.write(`<td width = ${tam} style = "background-color: black;"></td>`);
        else
            if(j % 2 == 0)
                document.write(`<td width = ${tam}></td>`);
            else
                document.write(`<td width = ${tam} style = "background-color: black;"></td>`);
    }
    document.write("</tr>");
}
document.write("</table>");
