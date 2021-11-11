function main(){
    document.querySelector('#fuente').addEventListener('click', (e)=>{
        let parrafos = document.getElementsByTagName('p');
        for(let i = 0 ; i < parrafos.length ; i++){
            parrafos[i].style.fontSize = document.querySelector('#fuente').value;
        }
    });

    document.querySelector('#fuente-normal').addEventListener('click', (e)=>{
        parrafos.forEach(element => {
            element.style.removeProperty('font-size'); 
        });
    });

}

window.addEventListener('load', main);