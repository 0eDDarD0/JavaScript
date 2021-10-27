num = 45;
document.write("<table border = solid>");

    for(let i = 1 ; i <= 10 ; i++){
        document.write("<tr><td>" + num + "</td><td>" + Math.sin(num * Math.PI / 180) + "</td></tr>");
        num += i;
    }

document.write("</table>");
