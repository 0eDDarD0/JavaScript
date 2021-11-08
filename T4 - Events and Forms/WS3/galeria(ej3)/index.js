function main(){
    let numimg = 1;
    let src = "WS3/galeria(ej3)/" + numimg + ".jpg";
    body = document.querySelector('body');
    var hammertime = new Hammer(body);

    //creamos y metemos la imagen y le añadimos una url
    body.appendChild(document.createElement("img"));
    document.querySelector('img').style.width = "500px";
    document.querySelector('img').style.height = "500px";
    document.querySelector('img').src = src;

    //gestos
    hammertime.on('panend', (e)=>{
        if(e.direction == 2){
            if(numimg < 3){
                numimg++;
                src = "WS3/galeria(ej3)/" + numimg + ".jpg";
                document.querySelector('img').src = src;
            }else{
                numimg = 1;
                src = "WS3/galeria(ej3)/" + numimg + ".jpg";
                document.querySelector('img').src = src;
            }
        }else if(e.direction == 4){
            if(numimg > 1){
                numimg--;
                src = "WS3/galeria(ej3)/" + numimg + ".jpg";
                document.querySelector('img').src = src;
            }else{
                numimg = 3;
                src = "WS3/galeria(ej3)/" + numimg + ".jpg";
                document.querySelector('img').src = src;
            }
        }
    });
    
}

window.addEventListener("load", main);