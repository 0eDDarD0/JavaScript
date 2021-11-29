function main(){

    let canvas = document.getElementById('canvas');

    let bola = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    bola.setAttributeNS(null, 'cx', 750);
    bola.setAttributeNS(null, 'cy', 345);
    bola.setAttributeNS(null, 'r', 50);
    bola.setAttributeNS(null, 'fill', 'red');
    canvas.appendChild(bola);

    let direccionx = true;
    let direcciony = true;

    let p1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    p1.setAttributeNS(null, 'height', 200);
    p1.setAttributeNS(null, 'width', 50);
    canvas.appendChild(p1);

    let p2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    p2.setAttributeNS(null, 'height', 200);
    p2.setAttributeNS(null, 'width', 50);
    p2.setAttributeNS(null, 'x', 1450);
    canvas.appendChild(p2);

    setInterval(()=>{
        let y = parseInt(bola.getAttributeNS(null, 'cy'));//Y DE LA BOLA
        let x = parseInt(bola.getAttributeNS(null, 'cx'));//X DE LA BOLA

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
            bola.setAttributeNS(null, 'cx', x + 12);
        }else{
            bola.setAttributeNS(null, 'cx', x - 12);
        }
        //MOVIMIENTO VERTICAL
        if(direcciony){
            bola.setAttributeNS(null, 'cy', y + 6);
        }else{
            bola.setAttributeNS(null, 'cy', y - 6);
        }

        //SALIDO DEL CANVAS
        if(x <= 0){
            bola.setAttributeNS(null, 'cx', 750);
            bola.setAttributeNS(null, 'cy', 345);
            direccionx = !direccionx;
            document.getElementById('p2').innerHTML = parseInt(document.getElementById('p2').innerHTML) + 1;
        }else if(x >= 1500){
            bola.setAttributeNS(null, 'cx', 750);
            bola.setAttributeNS(null, 'cy', 345);
            direccionx = !direccionx;
            document.getElementById('p1').innerHTML = parseInt(document.getElementById('p1').innerHTML) + 1;
            if(document.getElementById('p1').innerHTML == 10){
                document.getElementById('p1').setAttributeNS(null, 'x', 675);
            }
        }

    }, 10)

    window.addEventListener('keypress', (e)=>{
        let y1 = p1.y['animVal']['value'];
        let y2 = p2.y['animVal']['value'];

        if(e.key == 'q'){
            p1.setAttributeNS(null, 'y', y1 - 50);
            y1 = p1.y['animVal']['value'];
        }else if(e.key == 'a'){
            p1.setAttributeNS(null, 'y', y1 + 50);
            y1 = p1.y['animVal']['value'];
        }

        if(e.key == 'p'){
            p2.setAttributeNS(null, 'y', y2 - 50);
            y2 = p2.y['animVal']['value'];
        }else if(e.key == 'l'){
            p2.setAttributeNS(null, 'y', y2 + 50);
            y2 = p2.y['animVal']['value'];
        }

        if(y1 < 0){
            p1.setAttributeNS(null, 'y', 0);
        }else if(y1 > 490){
            p1.setAttributeNS(null, 'y', 490);
        }

        if(y2 < 0){
            p2.setAttributeNS(null, 'y', 0);
        }else if(y2 > 490){
            p2.setAttributeNS(null, 'y', 490);
        }
    });

}
window.addEventListener('load', main);