class Bola{
    constructor(r){
        this.x = 750;
        this.y = 345;
        this.r = r;
        this.vx = 12;
        this.vy = 6;
        this.dx = true;
        this.dy = true;
    }

    setX(x){
        this.x = x;
    }
    setY(y){
        this.y = y;
    }
}

class Uibola{
    constructor(bola, canvas){
        this.bola = bola;
        this.tag = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        this.tag.setAttributeNS(null, 'cx', bola.x);
        this.tag.setAttributeNS(null, 'cy', bola.y);
        this.tag.setAttributeNS(null, 'r', bola.r);
        this.tag.setAttributeNS(null, 'fill', 'red');
        canvas.appendChild(this.tag);
    }

    update(){
        this.tag.setAttributeNS(null, 'cx', this.bola.x);
        this.tag.setAttributeNS(null, 'cy', this.bola.y);
    }
}

export {Bola, Uibola};