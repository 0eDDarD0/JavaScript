function main(){
    var totalimg = 4;
    var numimg = 1;
    body = document.querySelector('body');
    var hammertime = new Hammer(document);

    //creamos un contador
    let count = document.getElementById('counter');
    count.innerHTML = numimg + "/" + totalimg;

    //gestos
    hammertime.on('panend', (e)=>{
        if(e.direction == 2){
            if(numimg < totalimg){
                numimg++;
                count.innerHTML = numimg + "/" + totalimg;
                document.body.style.backgroundImage = 'url("' + numimg + '.jpg")';
            }else{
                numimg = 1;
                count.innerHTML = numimg + "/" + totalimg;
                document.body.style.backgroundImage = 'url("' + numimg + '.jpg")';
            }
        }else if(e.direction == 4){
            if(numimg > 1){
                numimg--;
                count.innerHTML = numimg + "/" + totalimg;
                document.body.style.backgroundImage = 'url("' + numimg + '.jpg")';
            }else{
                numimg = 3;
                count.innerHTML = numimg + "/" + totalimg;
                document.body.style.backgroundImage = 'url("' + numimg + '.jpg")';
            }
        }
    });

    let izq = document.querySelector('#izq');
    izq.addEventListener('click', (e)=>{
        if(numimg > 1){
            numimg--;
            count.innerHTML = numimg + "/" + totalimg;
            document.body.style.backgroundImage = 'url("' + numimg + '.jpg")';
        }else{
            numimg = 3;
            count.innerHTML = numimg + "/" + totalimg;
            document.body.style.backgroundImage = 'url("' + numimg + '.jpg")';
        }
    });

    let der = document.querySelector('#der');
    der.addEventListener('click', (e)=>{
        if(numimg < totalimg){
            numimg++;
            count.innerHTML = numimg + "/" + totalimg;
            document.body.style.backgroundImage = 'url("' + numimg + '.jpg")';
        }else{
            numimg = 1;
            count.innerHTML = numimg + "/" + totalimg;
            document.body.style.backgroundImage = 'url("' + numimg + '.jpg")';
        }
    });
    
}

window.addEventListener("load", main);