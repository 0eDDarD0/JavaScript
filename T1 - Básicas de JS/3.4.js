function calcCircumference(r){
    
    const PI = 3.14159;
    document.write("The circumference is ", r * 2 * PI);
}

function calcArea(r){
    
    const PI = 3.14159;
    document.write("<br>The area is ", PI * (r ** 2));
}


let radio = window.prompt("Introduce el radio ");
calcCircumference(radio);
calcArea(radio);
