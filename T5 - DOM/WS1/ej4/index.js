function main(){

    document.querySelector('button').addEventListener('click', (e)=>{
        let li = document.createElement('li');
        let ul = document.querySelector('ul');
        li.innerHTML = ul.childElementCount + 1;
        ul.appendChild(li);
    });
}
window.addEventListener('load', main);