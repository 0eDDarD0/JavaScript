function main(){
    let enlaces = document.querySelectorAll('a');
    //1
    console.log(enlaces.length);
    //2
    console.log(enlaces[enlaces.length - 2].href);
    //3
    let googles = 0;
    for(let i = 0 ; i < enlaces.length ; i++){
        if(enlaces[i].href == 'https://www.google.com/'){
            googles++;
        }
    }
    console.log(googles);
    //4
    console.log(document.querySelectorAll('p:nth-child(3) a').length);

}
window.addEventListener('load', main);