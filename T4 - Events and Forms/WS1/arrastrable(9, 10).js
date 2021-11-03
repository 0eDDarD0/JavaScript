function main(){

    document.write('<img width="450" height="300" src="WS1/graphic_design.jpg" draggable="true" style="position: fixed;">');
    document.write('<img width="100" height="100" src="WS1/graphic_design.jpg" draggable="true" style="position: fixed;">');

    window.addEventListener("dragend", (e) =>{
        let img = e.target;//document.querySelector("img");
        img.style.left = e.clientX - (img.width / 2);
        img.style.top = e.clientY - (img.height / 2);
    });
}
window.addEventListener("load", main);