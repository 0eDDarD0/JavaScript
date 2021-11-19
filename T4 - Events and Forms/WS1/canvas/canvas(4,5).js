function main(){
    document.write('<table draggable="false" style="border:solid 1px black; border-spacing: 0;">');  //creacion de la tabla
    for(let i = 0 ; i < 120 ; i++){
        document.write('<tr>');
        for(let j = 0 ; j < 220 ; j++){
            document.write('<td class="r'+i+' c'+j+'" width=5 height=5></td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');

    let pincel = 1;
    document.write('<input id="pincel1" type="button" value="pequeño">');
    document.querySelector('#pincel1').addEventListener('click', (e)=>{
        pincel = 1;
    });
    document.write('<input id="pincel2" type="button" value="grande">');
    document.querySelector('#pincel2').addEventListener('click', (e)=>{
        pincel = 3;
    });

    //Evento de pintado
    document.write('<input id="color" type="color">');
    pixeles = document.querySelectorAll("td");
    for(let i = 0 ; i < pixeles.length ; i++){
        pixeles[i].addEventListener("mouseover", (e)=>{
            if(click){
                if(pincel == 1){
                    pixeles[i].style.backgroundColor = document.querySelector('#color').value;
                }else if(pincel == 3){
                    let r = parseInt(pixeles[i].className.split(" ")[0].slice(1));
                    let c = parseInt(pixeles[i].className.split(" ")[1].slice(1));
                    for(let i = r - 1 ; i <= r + 1 ; i++){
                        for(let j = c - 1 ; j <= c + 1 ; j++){
                            document.querySelector('td.r' + i + '.c' + j).style.backgroundColor = document.querySelector('#color').value;
                        }
                    }
                }
            }
        });
    }
    var click = false;
    document.addEventListener("mousedown", (e)=>{
        click = true;
    });
    document.addEventListener("mouseup", (e)=>{
        click = false;
    });

    //Evento de boton clear
    document.write('<input id="clear" type="button" value="Clear">');
    document.querySelector('#clear').addEventListener('click', (e)=>{
        for(let i = 0 ; i < pixeles.length ; i++){
            pixeles[i].style.backgroundColor = "white";
        }
    });

}

window.addEventListener("load", main);