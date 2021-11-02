function main(){
    document.write('<table style="border:solid 1px black;">');
    for(let i = 0 ; i < 10 ; i++){
        document.write('<tr>');
    for(let j = 0 ; j < 40 ; j++){
        document.write('<td width=30 height=30></td>');
    }
    document.write('</tr>');
    }
    document.write('</table>');

    let celdas = document.querySelectorAll('td');
    celdas.forEach(element => {
        element.addEventListener('mouseenter', (e)=>{
            if(e.ctrlKey && e.shiftKey){
                e.target.style.backgroundColor = "purple";
            }else if(e.ctrlKey){
                e.target.style.backgroundColor = "blue";
            }else if(e.shiftKey){
                e.target.style.backgroundColor = "red";
            }else if(e.altKey){
                e.target.style.backgroundColor = "white";
            }
        });
    });

    document.addEventListener("keypress", (e)=>{
        if(e.key == 'e'){
            celdas.forEach(element => {
                element.style.backgroundColor = "white";
            });
        }
    });
}

window.addEventListener("load", main);