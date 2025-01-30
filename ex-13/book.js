/*
* * OOP/POO
* Paradigma Orientado a Objetos
* class = clase -> fabrica
* constructor = constructor -> la maquina de una fabrica
* this = Object
*/

class Book {
    constructor(title,price, author ){
        this.title = title;
        this.price = price;
        this.author = author;
        this.info=`
        Título: ${this.title}
        Precio: ${this.price}
        Autor: ${this.author}
        `
    } 

    showInfo() {
        console.log(this.info)
    }
}

const laBrujaDePortobello = new Book('La Bruja de Portobello', 300, 'Paolo Coelho');
laBrujaDePortobello.showInfo()