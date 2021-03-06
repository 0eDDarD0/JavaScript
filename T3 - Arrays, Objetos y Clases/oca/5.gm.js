class Casilla{
    constructor(num, type = "none"){ //Cada casilla tendra su numero y el tipo de casilla que es
        this.num = num;
        this.type = type;
        this.ui = 0;
    }
}

class Player{
    constructor(name, ficha){
        this.name = name; //nombre
        this.pos = 0;     //casilla en la que se encuentra
        this.direction = 0; //direccion 0 si va subiendo y 1 si va bajando
        this.ficha = ficha;
    }
}

class Game{
    constructor(players){
        this.players = players; //array con los jugadores
        this.board = 0;         //array con las casillas del tablero
        this.winner = 0;        //es 0 cuando no hay ganador y es un player cuando se ha terminado la partida
    }

    init(){
        //Metodo que inicializa el tablero y pone todos los players en la casilla 0
        let board = [];
        for(let i = 0 ; i < 100 ; i++){ //lena 100 casillas en el tablero            

            if(i == 0){
                board[i] = new Casilla(i, "start"); //pone la casilla de start
            }else if(i == 99){
                board[i] = new Casilla(i, "end"); //pone la casilla de fin
            }else if(i % 10 == 0 && i != 90 && i != 10){
                board[i] = new Casilla(i, "salto"); //pone casilla de salto si es multiplo de 10
            }else if(i % 5 == 0 && i != 90 && i != 10){
                board[i] = new Casilla(i, "oca"); //pone casilla de oca si es multiplo de 5 y no de 10
            }else{
                board[i] = new Casilla(i, "normal"); //pone una casilla normal
            }
        }
        //Asigna a cada objeto casilla su td correspondiente del tablero
        for(let i = 0 ; i < casillas.length ; i++){
            if(i == 0){
                board[0].ui = casillas[0];
            }else if(i == 54){
                board[99].ui = casillas[54];
            }else{
                board[parseInt(casillas[i].innerHTML)].ui = casillas[i];
            }
        }
        this.board = board;
        
        for(let i = 0 ; i < this.players.length ; i++){ //establece la posicion de todos los jugadores a la casilla de start
            this.players[i].pos = this.board[0];
            this.players[i].direction = 0;
        }
    }

    tirada(player){
        console.log(player.name + " esta en la casilla " + player.pos.num);
        let dice = Math.floor(Math.random() * 6 + 1);   //tirada de dado
        console.log(player.name + " Ha sacado un " + dice);

        if(!player.direction){      //comprueba si el player va subiendo o bajando
            if((player.pos.num + dice) >= 99){      //si el jugador se pasa o llega al final se coloca ahi y cambia de direccion
                player.pos = this.board[99];
                player.direction = 1;
                console.log(player.name + " Ha llegado al final!");
            }else{
                player.pos = this.board[player.pos.num + dice];
                if(player.pos.type == "salto"){     //si cae en una casilla de salto sube 10 casillas mas
                    console.log(player.name + " Ha caido en un salto!");
                    player.pos = this.board[player.pos.num + 10];
                }else if(player.pos.type == "oca"){     //si cae en una casilla de oca vuelve a tirar (recursivamente)
                    console.log(player.name + ": De oca en oca y tiro porque me toca");
                    this.tirada(player);
                }
                console.log(player.name + " Ha llegado a la casilla " + player.pos.num);
            }

        }else{      //si el player esta bajando...
            if((player.pos.num - dice) <= 0){       //si ha llegado o se ha pasado del start lo coloca y anuncia el ganador
                player.pos = this.board[0];
                this.winner = player;
                console.log("El ganador es: " + this.winner.name);
            }else{
                player.pos = this.board[player.pos.num - dice];
                if(player.pos.type == "salto"){     //salto
                    console.log(player.name + " Ha caido en un salto!");
                    player.pos = this.board[player.pos.num - 10];
                }else if(player.pos.type == "oca"){     //oca
                    console.log(player.name + ": De oca en oca y tiro porque me toca");
                    this.tirada(player);
                }
                console.log(player.name + " Ha llegado a la casilla " + player.pos.num);
            }
        }
        //cambia el X y el Y de la ficha que corresponde al player segun la casilla en la que haya acabado el turno
        player.ficha.style.left = player.pos.ui.getBoundingClientRect().x + "px";
        player.ficha.style.top = player.pos.ui.getBoundingClientRect().y + "px";

    }

    play(){
        this.init();    //inicializa el juego
        while(!this.winner){
            for(let i = 0 ; i < this.players.length ; i++){     //realiza una tirada para cada player hasta que haya un ganador
                if(!this.winner){
                    window.prompt("");
                    this.tirada(this.players[i]);
                }
            }
        }
    }
}

//DA COLOR Y FONDO A TODAS LAS CASILLAS
var casillas = document.getElementsByTagName('td');
for(let i = 1 ; i <= 100 ; i++){
    let casilla = casillas[i - 1].innerHTML;
    if(casilla % 10 == 0 && casilla != 90 && casilla != 10){
        casillas[i - 1].style.backgroundImage = "url(escalera.jpg)";
        casillas[i - 1].style.backgroundSize = "contain";
    }else if(casilla % 5 == 0 && casilla != 90 && casilla != 10){
        casillas[i - 1].style.backgroundImage = "url(oca.png)";
        casillas[i - 1].style.backgroundSize = "contain";
    }else{
        casillas[i - 1].style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255 + 1) + ", " + Math.floor(Math.random() * 255 + 1)+ ", " + Math.floor(Math.random() * 255 + 1) + ")";
    }
}


p1 = new Player("Fer", document.getElementById('p1'));
p2 = new Player("Pablo", document.getElementById('p2'));
g1 = new Game([p1, p2]);
g1.play();