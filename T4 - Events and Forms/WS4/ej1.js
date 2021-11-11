function main(){

    //OPCION A
    let normal = document.querySelector('#normal');
    normal.addEventListener('click', (e)=>{
        body = document.querySelector('body');
        body.style.backgroundColor = 'burlywood';
        body.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
        
        header = document.querySelector('header');
        header.style.boxShadow = "black 3px 3px";
        header.style.backgroundColor = "cadetblue";

        div = document.querySelector('div');
        div.style.border = "chocolate 5px solid";
        div.style.backgroundColor = "white";
    });

    let minimo = document.querySelector('#minimo');
    minimo.addEventListener('click', (e)=>{
        body = document.querySelector('body');
        body.style.removeProperty('background-color');
        body.style.removeProperty('font-family');
        
        header = document.querySelector('header');
        header.style.removeProperty('box-shadow');
        header.style.removeProperty('background-color');

        div = document.querySelector('div');
        div.style.removeProperty('border');
        div.style.removeProperty('background-color');
    });


    //OPCION B
    //let normal = document.querySelector('#normal');
    //normal.addEventListener('click', (e)=>{
    //    document.querySelector('link').href = "ej1.css";
    //});

    //let minimo = document.querySelector('#minimo');
    //minimo.addEventListener('click', (e)=>{
    //    document.querySelector('link').href = "";
    //});
}

window.addEventListener('load', main);