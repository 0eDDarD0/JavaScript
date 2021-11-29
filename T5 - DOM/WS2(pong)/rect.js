class Rect{
    constructor(w, h){
        this.x = 0;
        this.y = 0;
        this.w = w;
        this.h = h;
        this.vy = 50;
    }

    setY(y){
        this.y = y;
    }
}

class Uirect{
    constructor(rect, canvas){
        this.rect = rect;
        this.tag = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        this.tag.setAttributeNS(null, 'x', rect.x);
        this.tag.setAttributeNS(null, 'y', rect.y);
        this.tag.setAttributeNS(null, 'width', rect.w);
        this.tag.setAttributeNS(null, 'height', rect.h);
        this.tag.setAttributeNS(null, 'fill', 'blue');
        canvas.appendChild(this.tag);
    }

    update(){
        this.tag.setAttributeNS(null, 'y', this.rect.y);
    }
}

export {Rect, Uirect};