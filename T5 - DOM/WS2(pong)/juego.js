class Juego{
    constructor(w, h){
        this.w = w;
        this.h = h;
        this.p1 = 0;
        this.p2 = 0;
    }
}

class Uijuego{
    constructor(juego, body){
        this.juego = juego;

        //CANVAS Y LINEA DE CENTROCAMPO
        this.tag = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        this.tag.setAttributeNS(null, 'width', juego.w);
        this.tag.setAttributeNS(null, 'height', juego.h);
        this.middle = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        this.middle.setAttributeNS(null, 'x', 750);
        this.middle.setAttributeNS(null, 'width', 5);
        this.middle.setAttributeNS(null, 'height', 690);

        //PUNTUACIONES DE LOS JUGADORES
        this.tagp1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        this.tagp1.setAttributeNS(null, 'x', 700);
        this.tagp1.setAttributeNS(null, 'y', 50);
        this.tagp1.setAttributeNS(null, 'font-size', 55);
        this.tagp1.innerHTML = 0;
        this.tagp2 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        this.tagp2.setAttributeNS(null, 'x', 775);
        this.tagp2.setAttributeNS(null, 'y', 50);
        this.tagp2.setAttributeNS(null, 'font-size', 55);
        this.tagp2.innerHTML = 0;

        this.tag.appendChild(this.middle);
        this.tag.appendChild(this.tagp1);
        this.tag.appendChild(this.tagp2);
        body.appendChild(this.tag);
    }

    update(){
        this.tagp1.innerHTML = this.juego.p1;
        this.tagp2.innerHTML = this.juego.p2;
        if(this.juego.p1 == 10){
            this.tagp1.setAttributeNS(null, 'x', 675);
        }
    }
}

export {Juego, Uijuego};