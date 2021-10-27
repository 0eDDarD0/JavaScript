n1 = parseInt(window.prompt("numero 1"));
n2 = parseInt(window.prompt("numero 2"));
o = window.prompt("operador");


switch(o){
    case "+":
        alert(n1 + n2);
        break;
    case "-":
        alert(n1 - n2);
        break;
    case "/":
        alert(n1 / n2);
        break;
    case "*":
        alert(n1 * n2);
        break;
}