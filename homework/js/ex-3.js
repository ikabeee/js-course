/**
 * * El grupo criminal Akatsuki de la serie Naruto quiere reorganizar sus miembros: 
* * 1. Crea un arreglo llamado `akatsuki` que contenga los nombres: `['Itachi', 'Kisame', 'Deidara']`.
* * 2. `Tobi` se revela como líder y quiere estar al inicio de la lista. Usa el método adecuado para agregarlo.
* * 3. Lamentablemente, `Itachi` fallece en combate. Elimínalo del arreglo.
* * 4. Aprovecha el método `map()` para crear un nuevo arreglo donde todos los miembros tengan el título "Akatsuki" antes de su nombre, por ejemplo: "Akatsuki Tobi".
* * 5. Imprime este nuevo arreglo usando `forEach()`.
 */

const akatsuki = ['Itachi', 'Kisame', 'Deidara'];
akatsuki.unshift('Tobi');
akatsuki.splice(akatsuki.indexOf('Itachi'), 1);
const newTeam = akatsuki.map((member)=>`Akatsuki: ${member}`)
newTeam.forEach((member)=>console.log(`${member}`))