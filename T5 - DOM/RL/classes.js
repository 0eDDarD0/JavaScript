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
    constructor(title, genre, author){
        this.modelo = new Book(title, genre, author);
        this.tag = document.createElement('div');
        this.tag.className = "libro";
        this.tag.innerHTML = title;
        this.tag.title = "Género: " + genre + "\nAutor: " + author;
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

    //finishCurrentBook(){
    //    this.lista[this.lista.indexOf(this.current_book)].finished_reading();
    //    this.last_book = this.current_book;
    //    this.current_book = this.next_book;
    //    this.read++;
    //    this.not_read--;

    //    if(this.not_read > 0){
    //        let fin = false;
    //        for(let i = 0 ; i < this.lista.length && !fin ; i++){
    //            if(!this.lista[i].read){
    //                this.next_book = this.lista[i];
    //                fin = true;
    //            }
    //        }
    //    }
    //}
}

class uiBookList{
    constructor(name){
        this.name = name;
        this.display = 0;
        this.modelo = new BookList(name);
        this.listTag = document.createElement('li');
        this.listTag.id = this.name;
        this.listTag.innerHTML = this.name;
        document.getElementById('aside-listas').appendChild(this.listTag);
    }
}

export{Book, BookList, uiBookList, uiBook};