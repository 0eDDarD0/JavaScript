function main(){

    document.querySelector('button').addEventListener('click', (e)=>{
        let nuevo = document.createElement('input');
        nuevo.type = "file";
        document.querySelector('form').appendChild(nuevo);
    });
}
window.addEventListener('load', main);