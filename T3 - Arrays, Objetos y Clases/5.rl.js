class Book{
    constructor(title, genre, author, read = false, read_date = ""){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.read_date = read_date;    
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
    constructor(array, read = 0, next_book = 0, current_book = 0, last_book = 0){
        this.lista = array;
        this.read = read;
        this.not_read = this.lista.length - this.read;
        this.next_book = next_book;
        this.current_book = current_book;
        this.last_book = last_book;
    }

    add(libro){
        this.lista.push(libro);
        this.not_read++;
        this.not_read == 1 ? this.next_book = libro : "";
    }

    finishCurrentBook(){
        this.last_book = this.current_book;
        this.current_book = 0;
        this.read++;
        this.not_read--;
    }

    toString(){
        return "Leídos: " + this.read +
            "<br> No leídos: " + this.not_read +
            "<br> Ultimo libro: " + this.not_read +
            "<br> Libro actual: " + this.not_read +
            "<br> Siguiente libro: " + this.not_read +
            "<br> Libros: " + this.lista;
    }
}

b1 = new Book("Don Quijote", "Novela", "Miguel de Cervantes");
b2 = new Book("El Arbol de la Ciencia", "Novela", "Pio Baroja");
b3 = new Book("Juego de Tronos", "Novela", "George R.R.Martin");
libros = [];
libros.push(b1);
libros.push(b2);
libros.push(b3);
l1 = new BookList(libros);
document.write(l1);