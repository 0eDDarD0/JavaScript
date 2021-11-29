import {Juego, Uijuego} from './juego.js';
import {Bola, Uibola} from './bola.js';
import {Rect, Uirect} from './rect.js';

function main(){
    //ATRIBUTOS DEL CANVAS
    let j = new Juego(1500, 690);
    let juego = new Uijuego(j, document.querySelector('body'));
    let canvas = juego.tag;

    //ATRIBUTOS DE LA BOLA
    let b = new Bola(50);
    b.setX(750);
    b.setY(345);
    let bola = new Uibola(b, canvas);

    //ATRIBUTOS DE P1
    let p1 = new Rect(50, 200);
    let player1 = new Uirect(p1, canvas);

    //ATRIBUTOS DE P2
    let p2 = new Rect(50, 200);
    p2.x = j.w - p2.w;
    let player2 = new Uirect(p2, canvas);

    //BUCLE DE JUEGO
    setInterval(()=>{
        //REBOTE VERTICAL
        if(b.y > (j.h - b.r)){
            b.dy = false;
        }
        else if(b.y < (0 + b.r)){
            b.dy = true;
        }

        //REBOTE HORIZONTAL
        if(b.x > (j.w - b.r - 50) && (b.y < p2.y + p2.h && b.y > p2.y)){
            b.dx = false;
        }
        else if(b.x < (0 + b.r + 50) && (b.y < p1.y + p2.h && b.y > p1.y)){
            b.dx = true;
        }

        //MOVIMIENTO HORIZONTAL
        if(b.dx){
            b.setX(b.x + b.vx);
        }else{
            b.setX(b.x - b.vx);
        }
        //MOVIMIENTO VERTICAL
        if(b.dy){
            b.setY(b.y + b.vy);
        }else{
            b.setY(b.y - b.vy);
        }

        //SALIDO DEL CANVAS
        if(b.x <= 0){
            b.setX(750);
            b.setY(345);
            b.dx = !b.dx;
            j.p2++;
        }else if(b.x >= j.w){
            b.setX(750);
            b.setY(345);
            b.dx = !b.dx;
            j.p1++;
        }

        //ACTUALIZAR POSICIONES
        juego.update();
        bola.update();
        player1.update();
        player2.update();
    }, 10);

    window.addEventListener('keypress', (e)=>{

        //ARRIBA ABAJO DE PLAYER 1
        if(e.key == 'q'){
            p1.setY(p1.y - p1.vy);
        }else if(e.key == 'a'){
            p1.setY(p1.y + p1.vy);
        }

        //ARRIBA ABAJO DE PLAYER 2
        if(e.key == 'p'){
            p2.setY(p2.y - p2.vy);
        }else if(e.key == 'l'){
            p2.setY(p2.y + p2.vy);
        }

        //TOPE VERTICAL DE PLAYER 1
        if(p1.y < 0){
            p1.setY(0);
        }else if(p1.y > 490){
            p1.setY(490);
        }

        //TOPE VERTICAL DE PLAYER 2
        if(p2.y < 0){
            p2.setY(0);
        }else if(p2.y > 490){
            p2.setY(490);
        }
    });

}
window.addEventListener('load', main);