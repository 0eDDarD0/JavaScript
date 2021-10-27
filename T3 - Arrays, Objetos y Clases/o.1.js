class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.stomach = [];
    }

    eat(food){
        if(this.stomach.length < 10)
            this.stomach.push(food);
        else{
            console.log(this.name + " esta llena");
        }
    }

    poop(){
        this.stomach = [];
    }

    toString(){
        return this.name + ", " + this.age;
    }
}

p1 = new Person("fer", 21);
p1.eat("pizza");
console.log(p1.stomach);
p1.poop();
console.log(p1.stomach);
document.write(p1);