function main(){
    let totalimg = 3;
    let numimg = 1;
    let src = "./" + numimg + ".jpg";
    body = document.querySelector('body');
    var hammertime = new Hammer(body);

    //creamos y metemos la imagen y le añadimos una url
    let img = document.querySelector('img');
    img.src = src;

    //creamos un contador
    let count = document.getElementById('counter');
    count.innerHTML = numimg + "/" + totalimg;

    //gestos
    hammertime.on('panend', (e)=>{
        if(e.direction == 2){
            if(numimg < totalimg){
                numimg++;
                count.innerHTML = numimg + "/" + totalimg;
                src = "./" + numimg + ".jpg";
                document.querySelector('img').src = src;
            }else{
                numimg = 1;
                count.innerHTML = numimg + "/" + totalimg;
                src = "./" + numimg + ".jpg";
                document.querySelector('img').src = src;
            }
        }else if(e.direction == 4){
            if(numimg > 1){
                numimg--;
                count.innerHTML = numimg + "/" + totalimg;
                src = "./" + numimg + ".jpg";
                document.querySelector('img').src = src;
            }else{
                numimg = 3;
                count.innerHTML = numimg + "/" + totalimg;
                src = "./" + numimg + ".jpg";
                document.querySelector('img').src = src;
            }
        }
    });
    
}

window.addEventListener("load", main);