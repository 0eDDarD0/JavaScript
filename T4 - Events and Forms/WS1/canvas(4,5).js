function main(){
    document.write('<table style="border:solid 1px black;">');  //creacion de la tabla
    for(let i = 0 ; i < 21 ; i++){
        document.write('<tr>');
        for(let j = 0 ; j < 45 ; j++){
            document.write('<td width=30 height=30></td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');

    document.addEventListener("mouseover", (e)=>{   //evento que detecta un mouseover
        if(e.target.tagName == "TD"){   //actua solo para los td
            if(e.ctrlKey && e.shiftKey){
                e.target.style.backgroundColor = "purple";
            }else if(e.ctrlKey){
                e.target.style.backgroundColor = "blue";
            }else if(e.shiftKey){
                e.target.style.backgroundColor = "red";
            }else if(e.altKey){
                e.target.style.backgroundColor = "white";
            }
        }
    });

    document.addEventListener("keypress", (e)=>{ //evento que detecta la entrada de teclado
        if(e.key == 'e'){
            celdas = document.querySelectorAll("td");
            celdas.forEach(element => {
                element.style.backgroundColor = "white";
            });
        }
    });
}

window.addEventListener("load", main);