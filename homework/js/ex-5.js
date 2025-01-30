/**
 * *
 * Konoha está formando equipos para una misión especial y necesita organizar a sus shinobi:
* *
* *1. Crea un arreglo llamado `shinobi` con los nombres: `['Naruto', 'Sasuke', 'Sakura']`.
* *2. Konohamaru quiere unirse a la misión, así que lo añaden al final de la lista.
* *3. Kakashi decide liderar el equipo, por lo que se agrega al inicio de la lista.
* *4. Usa el método `slice()` para seleccionar solo los tres primeros miembros del equipo para la misión principal, dejando a los demás en reserva.
* *5. Con el equipo principal seleccionado, utiliza `reduce()` para contar cuántas letras hay en total en los nombres de los miembros del equipo (por ejemplo, 'Naruto' tiene 6 letras).
* * 
*/
/* Example */


const shinobi = ['Naruto', 'Sasuke', 'Sakura'];
shinobi.push('Konohamaru');
shinobi.unshift('Kakashi');
const firstTeam = shinobi.slice(0,3);
const letterCounter=0;
const totalLetters = shinobi.reduce()