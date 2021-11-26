function main(){

    let direccionx = true;
    let direcciony = true;

    let p1 = document.getElementById('1');
    let p2 = document.getElementById('2');

    setInterval(()=>{
        var bola = document.getElementById('bola');//SVG DE LA BOLA
        var y = bola.cy['baseVal']['value'];//Y DE LA BOLA
        var x = bola.cx['baseVal']['value'];//X DE LA BOLA

        //REBOTE VERTICAL
        if(y > 640){
            direcciony = false;
        }
        else if(y < 60){
            direcciony = true;
        }

        //REBOTE HORIZONTAL
        if(x > 1399 && (y < p2.y['baseVal']['value'] + 200 && y > p2.y['baseVal']['value'])){
            direccionx = false;
        }
        else if(x < 101 && (y < p1.y['baseVal']['value'] + 200 && y > p1.y['baseVal']['value'])){
            direccionx = true;
        }

        //MOVIMIENTO HORIZONTAL
        if(direccionx){
            bola.cx['baseVal']['value'] = x + 10;
        }else{
            bola.cx['baseVal']['value'] = x - 10;
        }
        //MOVIMIENTO VERTICAL
        if(direcciony){
            bola.cy['baseVal']['value'] = y + 10;
        }else{
            bola.cy['baseVal']['value'] = y - 10;
        }

        window.addEventListener('keypress', (e)=>{
            let p1y = p1.y['baseVal']['value'];
            let p2y = p2.y['baseVal']['value'];

            if(e.key == 'q'){
                p1.y['baseVal']['value'] = p1y - 0.09;
            }else if(e.key == 'a'){
                p1.y['baseVal']['value'] = p1y + 0.09;
            }

            if(e.key == 'p'){
                p2.y['baseVal']['value'] = p2y - 0.09;
            }else if(e.key == 'l'){
                p2.y['baseVal']['value'] = p2y + 0.09;
            }
        });
    }, 10)

}
window.addEventListener('load', main);