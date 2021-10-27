function tirada(){
    dado = [1,2,3,4,5,6];
    t = [];

    t[0] = dado[Math.floor(Math.random() * 6)];
    t[1] = dado[Math.floor(Math.random() * 6)];

    return t;
}

var resultados = [];
for(i = 0 ; i < 6 ; i++){
    resultados[i] = new Array(6);
    for(let j = 0 ; j < 6 ; j++){
        resultados[i][j] = 0;   
    }
}

for(let i = 0 ; i < 36000 ; i++){
    let t = tirada();
    resultados[t[0] - 1][t[1] - 1]++;
}

document.write('<table border="solid">');
for(let i = 0 ; i < resultados.length ; i++){
    document.write("<tr>");
    for(let j = 0 ; j < 6 ; j++)
        document.write("<td>" + resultados[i][j] + "</td>");
    document.write("</tr>");
}
document.write('</table>');