class Book {
    constructor(pages, title, author, genre, numberPages){
        this.pages = pages;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.numberPages = numberPages;
        this.info=`
        Pages: ${this.pages}
        Título: ${this.title}
        Autor: ${this.author}
        Género: ${this.genre}
        Número de páginas: ${this.numberPages}
        `
        this.isLend=false;
    }
    lend(){
        if(this.isLend){
            console.log('This book is already lend');
        } else {
            this.isLend=true;
            console.log('This book is lend');
        }
    }
    returnBook(){
        if(this.isLend){
            this.isLend=false;
            console.log('This book is returned');
        } else {
            console.log('This book is not lend');
        }
    }
}

class Library{
    constructor(){
        this.books=[];
    }
    addBook(book){
        this.books.push(book);
        console.log(`The book ${book.title} has been added to the library`);
    }
    deleteBook(book){
        const index = this.books.indexOf(book);
        if(index !== -1){
            this.books.splice(index,1);
            console.log(`The book ${book.title} has been deleted from the library`);
        } else {
            console.log(`The book ${book.title} is not in the library`);
        }
    }
}

const book1 = new Book(300, 'La Bruja de Portobello', 'Paolo Coelho', 'Novela', 300);

book1.lend();
book1.lend();
book1.returnBook();
book1.lend();
