/**
 * * 
 * * The forEach() method of Array instances executes a provided function once for each array element.
 */

const pokemonTeam = ['Pikachu', 'Charmander', 'Bulbasor', 'Squirtle']

let counter = 0;

pokemonTeam.forEach((pokemon) => console.log(`Go! ${pokemon} and ${++counter}`));