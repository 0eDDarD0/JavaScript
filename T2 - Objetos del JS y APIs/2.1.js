document.write(Math.random() + '<br>');
document.write(Math.floor(Math.random() * 101 + 100) + '<br>');

min = parseInt(window.prompt("Numero minimo"));
max = parseInt(window.prompt("Numero maximo"));
document.write(Math.floor(Math.random() * (max - min + 1) + min));

