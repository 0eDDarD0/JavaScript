a = parseInt(window.prompt("a"));
b = parseInt(window.prompt("b"));
c = parseInt(window.prompt("c"));


s1 = (-b + Math.sqrt((b**2 - 4*a*c))) / (2 * a);
s2 = (-b - Math.sqrt((b**2 - 4*a*c))) / (2 * a);

document.write("La solucion positiva es: " + s1);
document.write("<br>La solucion negativa es: " + s2);