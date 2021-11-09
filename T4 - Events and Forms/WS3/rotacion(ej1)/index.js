function main(){

    body = document.querySelector('body');
    body.appendChild(document.createElement('div'));
    div = document.querySelector('div');
    div.style.backgroundColor = "red";
    div.style.width = "200px";
    div.style.height = "200px";
    div.style.margin = "auto";
    div.style.marginTop = "20%";

    window.addEventListener("deviceorientation", (e)=>{

        div.style.transform = "rotateX(" + e.beta + "deg) rotateY(" + e.gamma + "deg) rotateZ(" + -e.alpha + "deg)";

    });

}

window.addEventListener('load', main);