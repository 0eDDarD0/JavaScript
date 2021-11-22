window.onload = ()=>{

    let imgs = ["fotos/1.jpg", "fotos/2.jpg", "fotos/3.jpg", "fotos/4.jpg", "fotos/5.jpg", "fotos/6.jpg"];
    let num = 0;
    let foto = document.querySelector('img');

    document.querySelector('#ult').addEventListener('click', (e)=>{
        if(num > 0){
            num--;
            foto.src = imgs[num];
        }else{
            num = imgs.length - 1;
            foto.src = imgs[num];
        }
    });
    document.querySelector('#sig').addEventListener('click', (e)=>{
        if(num < imgs.length - 1){
            num++;
            foto.src = imgs[num];
        }else{
            num = 0;
            foto.src = imgs[num];
        }
    });
}