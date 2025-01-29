/**
 * *
Se está organizando un Torneo de Artes Marciales y diferentes luchadores están registrándose. Tu tarea es gestionar la lista de luchadores.

* * 1. Crea un arreglo llamado `luchadores` que contenga los nombres: `['Goku', 'Vegeta', 'Krillin']`.
* * 2. Usando el método `push()`, agrega a `Piccolo` y `Tien` al final de la lista.
* * 3. Usando el método `unshift()`, añade a `Yamcha` al inicio de la lista.
* * 4. `Krillin` decide no participar en el torneo. Usa el método adecuado para eliminarlo de la lista.
* * 5. Imprime la lista de luchadores usando `forEach()`.

*/

const fighters = ['Goku', 'Vegeta', 'Krillin'];

fighters.push('Piccolo', 'Tien');
fighters.unshift('Yamcha');
fighters.splice(3,1);
fighters.forEach((fighter)=> console.log(fighter))