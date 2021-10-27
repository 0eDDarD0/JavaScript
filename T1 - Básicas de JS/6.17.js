for(let i = 1 ; i <= 10 ; i++){

    document.write(`La tabla del ${i}`);
    for(let j = 0 ; j <= 10 ; j++){
        document.write(`<br>${i} x ${j} = ${i * j}`);
    }
    document.write("<br><br>");
}