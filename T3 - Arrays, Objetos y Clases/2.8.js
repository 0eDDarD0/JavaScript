function tirada(){
    dado = [1,2,3,4,5,6];

    sum = dado[Math.floor(Math.random() * 6)];
    sum += dado[Math.floor(Math.random() * 6)];

    return sum;
}

resultados = [0,0,0,0,0,0,0,0,0,0,0];
for(let i = 0 ; i < 36000 ; i++)
    resultados[tirada() - 2]++;

for(let i = 0 ; i < resultados.length ; i++)
    document.write(resultados[i] + ' ');