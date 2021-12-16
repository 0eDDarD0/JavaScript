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
}



class uiBook{
    constructor(book){
        this.modelo = book;
        this.tag = document.createElement('div');
        this.tag.className = "libro";
        this.tag.innerHTML = this.modelo.title;
        this.tag.title = "Género: " + this.modelo.genre + "\nAutor: " + this.modelo.author;
        this.tag.style.backgroundColor = "rgb("+Math.floor(Math.random() * 256 + 1)+", "+Math.floor(Math.random() * 256 + 1)+", "+Math.floor(Math.random() * 256 + 1)+")";         
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
    }

    add(libro){
        this.lista.push(libro);
        this.not_read++;
        this.not_read == 1 ? this.next_book = libro : "";
    }

    nuevo(lista){
        this.name = lista.name;
        this.lista = lista.lista;
        this.read = lista.read;
        this.not_read = lista.not_read;
        this.next_book = lista.next_book;
        this.current_book = lista.current_book;
        this.last_book = lista.last_book;
    }
}

class uiBookList{
    constructor(lista){
        this.modelo = lista
        this.tag = document.createElement('li');
        this.tag.id = this.modelo.name;
        this.tag.innerHTML = this.modelo.name;
        document.getElementById('aside-listas').appendChild(this.tag);
        this.tag_list = []
    }
}

export{Book, BookList, uiBookList, uiBook};

//JSON DEFINITION EXAMPLE
//var lista = {
//    'name' : 'lista1',
//    'lista' : [{
//        'title' : 'Don Quijote',
//        'genre' : 'Novela',
//        'author' : 'Cervantes',
//        'read' : false,
//        'read_date' : ''
//    }],
//    'read' : 0,
//    'not_read' : 1,
//    'next_book' : null,
//    'current_book' : null,
//    'last_book' : null
//}