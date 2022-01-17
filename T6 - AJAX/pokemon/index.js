$(document).ready(function(){
    //ARRAY DE POKEMONS
    let pokemons = [];
    var pidiendo = false;
    //PEDIMOS LOS PRIMEROS POKEMON
    pedirPokemons(1, pokemons);

    //EVENTO PARA LA BUSQUEDA DE UN POKEMON (OBSOLETO)
    //window.addEventListener('keyup', (e)=>{
    //    let input = document.querySelector('#search');
    //    //SI SE ESCRIBE ALGO SE COMPARA Y SE BUSCAN LAS COINCIDENCIAS
    //    if(input.value.length > 0){
    //        document.querySelector('article').innerHTML = "";
    //        for(let i = 0 ; i < pokemons.length ; i++){
    //            if(pokemons[i].name.includes(input.value.toLowerCase())){
    //                let card = createCard(pokemons[i]);
    //                document.querySelector('article').append(card);
    //            }
    //        }
    //    //SI NO HAY NADA SE VUELVEN A COLOCAR TODOS
    //    }else if(input.value.length == 0){
    //        document.querySelector('article').innerHTML = "";
    //        for(let i = 0 ; i < pokemons.length ; i++){
    //            let card = createCard(pokemons[i]);
    //            document.querySelector('article').append(card);
    //        }
    //    }
    //});


    //COMPROBAMOS EL NIVEL DEL SCROLL PARA SABER CUANDO PEDIR MAS POKEMONS
    setInterval(() => {
        if(window.scrollY + window.innerHeight >= document.body.offsetHeight - 2500 && pokemons.length < 898){
            pedirPokemons(pokemons.length + 1, pokemons);
        }        
    }, 3000);

});

function createCard(d){
    //CARTA
    let card = maquetaElemento('div', 'card', '');
    //COLOR DE FONDO EN FUNCION DEL TIPO DEL POKEMON
    if(d.types.length > 1){
        card.css({'backgroundImage' : "linear-gradient(to bottom right, " + colorType(d.types[0].type.name) + ", " + colorType(d.types[1].type.name) + ")"});
    }else{
        card.css({'backgroundColor' : colorType(d.types[0].type.name)});
    }

    //EVENTO QUE CREA EL DETALLE
    card.click(function(e){
        createDetail(d.name);
    });

    //NUMERO
    let text = maquetaElemento('div', 'text', '');
    let num = maquetaElemento('div', '', d.id);
    text.append(num);
    text.css({'width' : "10%"});
    text.css({'justifyContent' : 'center'});
    card.append(text);

    //IMAGEN
    let img = maquetaElemento('img', 'pokemon', '');
    img.attr({'src' : d.sprites['front_default']});
    card.append(img);


    //TEXTO
    text = maquetaElemento('div', 'text', '');
    //nombre
    let name = maquetaElemento('div', '', "Name: " + mayuscula(d.name));
    text.append(name);
    //tipo
    let type;
    if(d.types.length > 1){
        type = maquetaElemento('div', '', "Types: " + mayuscula(d.types[0].type.name) + " / " + mayuscula(d.types[1].type.name)); 
    }else{
        type = maquetaElemento('div', '', "Types: " + mayuscula(d.types[0].type.name)); 
    }
    text.append(type);

    //card.css({'display' : 'none'});
    card.append(text);
    //card.fadeIn();
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



function createDetail(nombre){
    //FUNCION QUE MAQUETA EL DETALLE DE UN POKEMON
    $.get('https://pokeapi.co/api/v2/pokemon/' + nombre, function(d){
        let detalle = maquetaElemento('div', 'detalle', '');
        //COLOR DEL DETALLE
        if(d.types.length > 1){
            detalle.css({'background-image' : "linear-gradient(to bottom right, " + colorType(d.types[0].type.name) + ", " + colorType(d.types[1].type.name) + ")"});
        }else{
            detalle.css({'background-color' : colorType(d.types[0].type.name)});
        }

        //EVENTO QUE ELIMINA EL DETALLE
        $(window).click(function(e){
            if(e.target != detalle){
                $('div.detalle').fadeOut('fast');
                //$('div.detalle').remove();
            }
        });



        //PARTE IZQUIERDA
        let izq = maquetaElemento('div', 'izq', '');
        detalle.append(izq);

        //NUMERO
        let text = maquetaElemento('div', 'text', '');
        let num = maquetaElemento('div', '', 'Id: ' + d.id);
        text.append(num);
        text.css({'width' : "15%"});
        text.css({'justifyContent' : 'center'});
        izq.append(text);

        //IMAGEN
        let img = maquetaElemento('img', 'pokemon2', '');
        img.attr({'src' : d.sprites['front_default']});
        izq.append(img);

        //TEXTO IZQUIERDA
        text = maquetaElemento('div', 'text2', '');
        //nombre
        let name = maquetaElemento('div', '', "Name: " + mayuscula(d.name));
        text.append(name);
        //tipo
        let type;
        if(d.types.length > 1){
            type = maquetaElemento('div', '', "Types: " + mayuscula(d.types[0].type.name) + " / " + mayuscula(d.types[1].type.name));
        }else{
            type = maquetaElemento('div', '', "Types: " + mayuscula(d.types[0].type.name));
        }
        text.append(type);
        //peso
        let peso = maquetaElemento('div', '', "Weight: " + (parseInt(d.weight) / 10) + "Kg");
        text.append(peso);
        //altura
        let altura = maquetaElemento('div', '', "Height: " + (parseInt(d.height) / 10) + "m");
        text.append(altura);
        //SE CIERRA PARTE IZQUIERDA
        izq.append(text);


        //PARTE DERECHA
        let der = maquetaElemento('div', 'der', '');
        detalle.append(der);
        //TEXTO DERECHA 1
        text = maquetaElemento('div', 'text2', '');
        //estadisticas
        let stats = ['PS: ', 'Attack: ', 'Defense: ', 'Sp Attack: ', 'Sp Defense: ', 'Speed: '];
        for(let i = 0 ; i < stats.length ; i++){
            let stat = maquetaElemento('div', '', stats[i] + d.stats[i].base_stat);
            text.append(stat);
        }
        //SE CIERRA TEXTO DERECHA 1
        der.append(text);

        //TEXTO DERECHA 2
        text = maquetaElemento('div', 'text2', '');
        //habilidad1
        let hab = maquetaElemento('div', '', "Hability 1º: " + mayuscula(d.abilities[0].ability.name));
        text.append(hab);
        //habilidad2
        if(d.abilities.length > 1){
            hab = maquetaElemento('div', '', "Hability 2º: " + mayuscula(d.abilities[1].ability.name));
            text.append(hab);
        }
        //SE CIERRA TEXTO DERECHA 2
        der.append(text);

        //CERRAMOS EL DETALLE
        $('body').append(detalle);
        });
}



function maquetaElemento(tag, clase, inner){
    //FUNCION QUE INICIALIZA Y CAMBIA LOS PARAMETROS GENERALES DE UN OBJETO DOM
    let elem = $('<' + tag + '></' + tag + '>');
    elem.addClass(clase);
    elem.text(inner);

    return elem;
}



function pedirPokemons(inicio, pokemons){
    pidiendo = true;
    //FUNCION QUE PIDE POKEMONS A LA API Y LOS MAQUETA
    for(let i = inicio ; i < inicio + 100 ; i++){//899
        $.get('https://pokeapi.co/api/v2/pokemon/' + i, function(data){
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
                    $('article').append(card);
                }
            }
        });
    }
    pidiendo = false;
}