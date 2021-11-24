function main(){
    var tabla = document.createElement('table');
    tabla.style.border = 'solid 1px black';
    tabla.style.borderSpacing = '0';
    tabla.draggable = false;

    for(let i = 0 ; i < 107 ; i++){
        let tr = document.createElement('tr');
        tr.draggable = false;

        for(let j = 0 ; j < 255 ; j++){
            let td = document.createElement('td');
            td.draggable = false;
            td.className = 'r'+i+' c'+j;
            td.style.width = '4px';
            td.style.height = '4px';
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
    document.querySelector('body').appendChild(tabla);

    let pincel = 1;
    document.querySelector('#pincel1').addEventListener('click', (e)=>{
        pincel = 1;
    });
    document.querySelector('#pincel2').addEventListener('click', (e)=>{
        pincel = 3;
    });

    //Evento de pintado
    var pixeles = document.querySelectorAll("td");
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
    //document.write('<input id="clear" type="button" value="Clear">');
    document.querySelector('#clear').addEventListener('click', (e)=>{
        for(let i = 0 ; i < pixeles.length ; i++){
            pixeles[i].style.backgroundColor = "white";
        }
    });

}

window.addEventListener("load", main);