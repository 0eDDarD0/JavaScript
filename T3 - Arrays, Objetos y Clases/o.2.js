class Car{
    constructor(model, milesPerGallon){
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

    fill(gallons){
        this.tank += gallons;
    }

    drive(distance){
        let spent = distance / this.milesPerGallon;
        if(spent < this.tank){
            this.odometer += distance;
            this.tank -= spent;
        }else if(spent == this.tank){
            this.odometer += distance;
            this.tank = 0;
            console.log("I ran out of fuel at" + this.odometer + "miles!")
        }else{
            this.odometer = this.tank * this.milesPerGallon;
            this.tank = 0;
            console.log("I ran out of fuel at " + this.odometer + " miles!")
        }
    }
}

c1 = new Car("ford", 10);
c1.fill(100);
c1.drive(1001);