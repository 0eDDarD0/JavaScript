class Book{
    constructor(title, genre, author){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = false;
        this.read_date = "";    
    }

    finished_reading(){
        this.read = true;
        this.read_date = new Date();
    }
    
    toString(){
        //return "Titulo: " + this.title + 
        //    "<br>Genero: " + this.genre +
        //    "<br>Autor: " + this.author +
        //    "<br>Leído: " + (this.read ? "Sí" : "No") +
        //    (this.read ? ("<br>Fecha de su lectura: " + this.read_date) : "");
        return this.title;
    }
}



class BookList{
    constructor(name){
        this.name = name;
        this.lista = [];
        this.read = 0;
        this.not_read = 0;
        this.next_book = 0;
        this.current_book = 0;
        this.last_book = 0;
        this.display = 0;
    }

    add(libro){
        this.lista.push(libro);
        this.not_read++;
        this.not_read == 1 ? this.next_book = libro : "";
    }

    finishCurrentBook(){
        this.lista[this.lista.indexOf(this.current_book)].finished_reading();
        this.last_book = this.current_book;
        this.current_book = this.next_book;
        this.read++;
        this.not_read--;

        if(this.not_read > 0){
            let fin = false;
            for(let i = 0 ; i < this.lista.length && !fin ; i++){
                if(!this.lista[i].read){
                    this.next_book = this.lista[i];
                    fin = true;
                }
            }
        }
    }

    toString(){
        return "Leídos: " + this.read +
            "<br> No leídos: " + this.not_read +
            "<br> Ultimo libro: " + this.last_book +
            "<br> Libro actual: " + this.current_book +
            "<br> Siguiente libro: " + this.next_book +
            "<br> Libros: " + this.lista;
    }
}

function main(){

    var displayed = "";
    document.querySelector('#aniadirLibro').style.display = "None";
    var listas = [];
    var listasui = [];
    var ulListas = document.querySelector('#listas');


    function addList(){
        let name = window.prompt("Nombre de la lista: ");
        if(name){
            list = new BookList(name);
            listas.push(list);

            listasui.push(document.createElement("li"));
            let index = listasui.length - 1
            listasui[index].id = listas[index].name;
            listasui[index].innerHTML = listas[index].name;
            ulListas.appendChild(listasui[index]);

            listasui[index].addEventListener('click', (e)=>{
                if(!displayed){   //Si no se muestra una lista se muestra la clicada
                    for(let i = 0 ; i < listas[listas.length-1].lista.length ; i++){
                        let l = document.createElement('div');
                        l.className = "libro";
                        l.innerHTML = listas[listas.length-1].lista[i].title;
                        document.querySelector('article').appendChild(l);
                    }
                    displayed = listas[index];
                    listasui[index].style.backgroundColor = "rgb(77, 77, 77)";
                    document.querySelector('#aniadirLibro').style.display = "inline-block";
                }else if(displayed != listas[index]){    //Si la lista que se muestra es otra se elimina y se muestra la nueva
                    document.querySelector('article').innerHTML = "";   //se quitan los libros 
                    for(let i = 0 ; i < listas[index].lista.length ; i++){  //por cada libro de la lista se añade un div
                        let l = document.createElement('div');
                        l.className = "libro";
                        l.innerHTML = listas[index].lista[i].title;
                        document.querySelector('article').appendChild(l);
                    }
                    listasui[listas.indexOf(displayed)].style.backgroundColor = "";
                    displayed = listas[index];  //cambia la variable
                    listasui[index].style.backgroundColor = "rgb(77, 77, 77)";
                    document.querySelector('#aniadirLibro').style.display = "inline-block"; //añade el boton addBook

                }else if(displayed == listas[index]){  //Si la lista que se muestra es la misma desaparecen los libros
                    document.querySelector('article').innerHTML = "";   //quita los libros
                    displayed = ""; //vacia la variable
                    listasui[index].style.backgroundColor = ""; //elimina el color de la seleccion
                    document.querySelector('#aniadirLibro').style.display = "None"; //quita el boton addBook

                }
            });
        }
    }
    document.querySelector('#aniadirLista').addEventListener('click', addList);


    function addBook(){
        if(displayed){
            let title = window.prompt("Titulo: ");
            let genre = window.prompt("Genero: ");
            let author = window.prompt("Autor: ");
            if(title && genre && author){
                displayed.add(new Book(title, genre, author));

                let l = document.createElement('div');
                l.className = "libro";
                l.innerHTML = title;
                document.querySelector('article').appendChild(l);
            }else{
                alert("Por favor proporcione un titulo, un genero y un autor validos");
            }
        }else{
            alert("Para añadir un libro, primero seleccione una lista");
        }
    }
    document.querySelector('#aniadirLibro').addEventListener('click', addBook);


    libros = [];
    libros.push(new Book("Don Quijote", "Novela", "Cervantes"));
    libros.push(new Book("Juego de Tronos", "Novela", "George R.R.Martin"));
    libros.push(new Book("La Biblia", "Novela / Autoayuda", "Múltiples Autores"));
    libros.push(new Book("Libro1", "genero1", "autor1"));
    libros.push(new Book("Libro2", "genero2", "autor2"));
    libros.push(new Book("Libro3", "genero3", "autor3"));
    libros.push(new Book("Libro4", "genero4", "autor4"));
    libros.push(new Book("LIBRO CON EL TITULO LARGUISIMO PERO TELA DE LARGO EH", "genero5", "autor5"));

    addList();
    for(let i = 0 ; i < libros.length ; i++){
        listas[0].add(libros[i]);
    }

}

window.addEventListener('load', main);