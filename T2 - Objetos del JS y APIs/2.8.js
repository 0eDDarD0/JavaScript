let r = Math.floor(Math.random() * 3);

if(r == 0){

    var img = "1.jpg";

}else if(r == 1){

    var img = "2.png";

}else{

    var img = "3.jpg";

}

document.write(`<img src = ${img}>`);