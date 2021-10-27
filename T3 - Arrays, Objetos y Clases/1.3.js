function lanzamiento(){
    return Math.floor(Math.random() * 6 + 1);
}

results = [0, 0, 0, 0, 0, 0];
for(let i = 0 ; i < 6000 ; i++){
    results[lanzamiento() - 1]++;
}

document.write(results);