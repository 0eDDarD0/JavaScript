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
    constructor(){
        this.lista = [];
        this.read = 0;
        this.not_read = 0;
        this.next_book = 0;
        this.current_book = 0;
        this.last_book = 0;
    }

    add(libro){
        this.lista.push(libro);
        if(libro.read){
            this.read++;
        }else{
            this.not_read++;
            this.not_read == 1 ? this.next_book = libro : "";
        }
        
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