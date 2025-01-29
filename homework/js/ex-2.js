/**
 * *Eres un Entrenador Pokémon y debes preparar tu equipo para una batalla.

* *1. Crea un arreglo llamado `equipoPokemon` con los Pokémon: `['Charizard', 'Pikachu', 'Bulbasaur']`.
* *2. Te das cuenta de que `Charizard` está lastimado y no puede pelear, así que necesitas sacarlo del equipo y en su lugar poner a `Squirtle` al inicio. Usa los métodos adecuados para hacer estos cambios.
* *3. Durante la batalla, capturas un `Geodude`. Añade este Pokémon al final de tu equipo.
* *4. Para saber con quién contarás en la próxima ronda, crea un nuevo arreglo llamado `proximosEnLuchar` que contenga los dos primeros Pokémon de tu equipo. Utiliza `slice()` para hacerlo.
* *5. Muestra la lista de `proximosEnLuchar` usando `forEach()`.
 */

pokemonTeam = ['Charizard', 'Pikachu', 'Bulbasaur'];
pokemonTeam.shift();
pokemonTeam.unshift('Squirtle')
pokemonTeam.push('Geodude')
nextToFight = pokemonTeam.slice(0,2);
nextToFight.forEach((pokemon)=> console.log(pokemon))