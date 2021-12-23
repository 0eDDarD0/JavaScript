function main(){
    //ARRAY DE POKEMONS
    let pokemons = [];
    var pidiendo = false;
    //PEDIMOS LOS PRIMEROS POKEMON
    pedirPokemons(1, pokemons);

    //EVENTO PARA LA BUSQUEDA DE UN POKEMON (OBSOLETO)
    window.addEventListener('keyup', (e)=>{
        let input = document.querySelector('#search');
        //SI SE ESCRIBE ALGO SE COMPARA Y SE BUSCAN LAS COINCIDENCIAS
        if(input.value.length > 0){
            document.querySelector('article').innerHTML = "";
            for(let i = 0 ; i < pokemons.length ; i++){
                if(pokemons[i].name.includes(input.value.toLowerCase())){
                    let card = createCard(pokemons[i]);
                    document.querySelector('article').appendChild(card);
                }
            }
        //SI NO HAY NADA SE VUELVEN A COLOCAR TODOS
        }else if(input.value.length == 0){
            document.querySelector('article').innerHTML = "";
            for(let i = 0 ; i < pokemons.length ; i++){
                let card = createCard(pokemons[i]);
                document.querySelector('article').appendChild(card);
            }
        }
    });


    //COMPROBAMOS EL NIVEL DEL SCROLL PARA SABER CUANDO PEDIR MAS POKEMONS
    setInterval(() => {
        if(window.scrollY + window.innerHeight >= document.body.offsetHeight - 2500 && pokemons.length < 898){
            pedirPokemons(pokemons.length + 1, pokemons);
        }        
    }, 3000);

}
window.addEventListener('load', main);

function createCard(d){
    //CARTA
    let card = maquetaElemento('div', 'card', '');
    //COLOR DE FONDO EN FUNCION DEL TIPO DEL POKEMON
    if(d.types.length > 1){
        card.style.backgroundImage = "linear-gradient(to bottom right, " + colorType(d.types[0].type.name) + ", " + colorType(d.types[1].type.name) + ")" ;
    }else{
        card.style.backgroundColor = colorType(d.types[0].type.name);
    }
    //EVENTOS DE LA CARTA
    card.addEventListener('mouseover', (e)=>{
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', (e)=>{
        card.style.transform = 'scale(1)';
    });
    //EVENTO QUE CREA EL DETALLE
    card.addEventListener('click', (e)=>{
        createDetail(d);
    });

    //NUMERO
    let text = maquetaElemento('div', 'text', '');
    let num = maquetaElemento('div', '', d.id);
    text.appendChild(num);
    text.style.width = "10%";
    text.style.justifyContent = 'center';
    card.appendChild(text);

    //IMAGEN
    let img = maquetaElemento('img', 'pokemon', '');
    img.src = d.sprites['front_default'];
    card.appendChild(img);


    //TEXTO
    text = maquetaElemento('div', 'text', '');
    //nombre
    let name = maquetaElemento('div', '', "Name: " + mayuscula(d.name));
    text.appendChild(name);
    //tipo
    let type;
    if(d.types.length > 1){
        type = maquetaElemento('div', '', "Types: " + mayuscula(d.types[0].type.name) + " / " + mayuscula(d.types[1].type.name)); 
    }else{
        type = maquetaElemento('div', '', "Types: " + mayuscula(d.types[0].type.name)); 
    }
    text.appendChild(type);


    card.appendChild(text);
    return card;
}



function mayuscula(s){
    //CAMBIA A MAYUSCULA LA PRIMERA LETRA DE UNA PALABRA
    let nuevo = s[0].toUpperCase() + s.substr(1, s.length-1);
    return nuevo;
}



function colorType(type){
    //FUNCION QUE DEVULEVE UN COLOR PARA CADA TIPO CORRESPONDIENTE
    switch(type){
        case 'fire':
            return 'red';
        case 'ground':
            return 'rgb(243, 206, 43)';
        case 'rock':
            return 'rgb(75, 65, 43)';
        case 'water':
            return 'rgb(16, 12, 238)';
        case 'normal':
            return 'beige';
        case 'dark':
            return 'rgb(44, 44, 44)';
        case 'poison':
            return 'purple';
        case 'grass':
            return 'rgb(40, 207, 40)';
        case 'fairy':
            return 'rgb(255, 152, 169)';
        case 'fighting':
            return 'rgb(255, 123, 0)';
        case 'electric':
            return 'yellow';
        case 'ice':
            return 'rgb(183, 237, 255)';
        case 'bug':
            return 'rgb(91, 163, 91)';
        case 'ghost':
            return 'rgb(61, 31, 61)';
        case 'psychic':
            return 'rgb(241, 33, 241)';
        case 'dragon':
            return 'rgb(22, 22, 87)';
        case 'steel':
            return 'darkgray';
        case 'flying':
            return 'lightskyblue'
    }
}



function createDetail(d){
    //FUNCION QUE MAQUETA EL DETALLE DE UN POKEMON
    fetch('https://pokeapi.co/api/v2/pokemon/' + d.name).then(response => response.json()).then((data)=>{
        let detalle = maquetaElemento('div', 'detalle', '');
        //COLOR DEL DETALLE
        if(d.types.length > 1){
            detalle.style.backgroundImage = "linear-gradient(to bottom right, " + colorType(d.types[0].type.name) + ", " + colorType(d.types[1].type.name) + ")" ;
        }else{
            detalle.style.backgroundColor = colorType(d.types[0].type.name);
        }

        //EVENTO QUE ELIMINA EL DETALLE
        window.addEventListener('click', (e)=>{
            if(e.target != detalle){
                document.querySelector('body').removeChild(detalle);
            }
        });



        //PARTE IZQUIERDA
        let izq = maquetaElemento('div', 'izq', '');
        detalle.appendChild(izq);

        //NUMERO
        let text = maquetaElemento('div', 'text', '');
        let num = maquetaElemento('div', '', 'Id: ' + d.id);
        text.appendChild(num);
        text.style.width = "15%";
        text.style.justifyContent = 'center';
        izq.appendChild(text);

        //IMAGEN
        let img = maquetaElemento('img', 'pokemon2', '');
        img.src = d.sprites['front_default'];
        izq.appendChild(img);

        //TEXTO IZQUIERDA
        text = maquetaElemento('div', 'text2', '');
        //nombre
        let name = maquetaElemento('div', '', "Name: " + mayuscula(d.name));
        text.appendChild(name);
        //tipo
        let type;
        if(d.types.length > 1){
            type = maquetaElemento('div', '', "Types: " + mayuscula(d.types[0].type.name) + " / " + mayuscula(d.types[1].type.name));
        }else{
            type = maquetaElemento('div', '', "Types: " + mayuscula(d.types[0].type.name));
        }
        text.appendChild(type);
        //peso
        let peso = maquetaElemento('div', '', "Weight: " + (parseInt(d.weight) / 10) + "Kg");
        text.appendChild(peso);
        //altura
        let altura = maquetaElemento('div', '', "Height: " + (parseInt(d.height) / 10) + "m");
        text.appendChild(altura);
        //SE CIERRA PARTE IZQUIERDA
        izq.appendChild(text);


        //PARTE DERECHA
        let der = maquetaElemento('div', 'der', '');
        detalle.appendChild(der);
        //TEXTO DERECHA 1
        text = maquetaElemento('div', 'text2', '');
        //estadisticas
        let stats = ['PS: ', 'Attack: ', 'Defense: ', 'Sp Attack: ', 'Sp Defense: ', 'Speed: '];
        for(let i = 0 ; i < stats.length ; i++){
            let stat = maquetaElemento('div', '', stats[i] + d.stats[i].base_stat);
            text.appendChild(stat);
        }
        //SE CIERRA TEXTO DERECHA 1
        der.appendChild(text);

        //TEXTO DERECHA 2
        text = maquetaElemento('div', 'text2', '');
        //habilidad1
        let hab = maquetaElemento('div', '', "Hability 1º: " + mayuscula(d.abilities[0].ability.name));
        text.appendChild(hab);
        //habilidad2
        if(d.abilities.length > 1){
            hab = maquetaElemento('div', '', "Hability 2º: " + mayuscula(d.abilities[1].ability.name));
            text.appendChild(hab);
        }
        //SE CIERRA TEXTO DERECHA 2
        der.appendChild(text);

        //CERRAMOS EL DETALLE
        document.querySelector('body').appendChild(detalle);
        });
}



function maquetaElemento(tag, clase, inner){
    //FUNCION QUE INICIALIZA Y CAMBIA LOS PARAMETROS GENERALES DE UN OBJETO DOM
    let elem = document.createElement(tag);
    elem.className = clase;
    elem.innerHTML = inner;

    return elem;
}



function pedirPokemons(inicio, pokemons){
    pidiendo = true;
    //FUNCION QUE PIDE POKEMONS A LA API Y LOS MAQUETA
    for(let i = inicio ; i < inicio + 100 ; i++){//899
        fetch('https://pokeapi.co/api/v2/pokemon/' + i).then(response => response.json()).then((data)=>{
            if(!pokemons.includes(data)){
                pokemons.push(data);
                //ORDENAMOS SEGUN ID DEL POKEMON
                pokemons.sort((a,b)=>{
                    return a.id - b.id;
                });
                //VOLVEMOS A MAQUETAR
                document.querySelector('article').innerHTML = "";
                for(let j = 0 ; j < pokemons.length ; j++){
                    let card = createCard(pokemons[j]);
                    document.querySelector('article').appendChild(card);
                }
            }
        });
    }
    pidiendo = false;
}