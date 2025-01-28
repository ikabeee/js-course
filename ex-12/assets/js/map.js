/*
* The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
*/

const pokemonTeam = ['Pikachu', 'Charmander', 'Bulbasor', 'Squirtle']


const topTierPikachu = pokemonTeam.map((selectedPoke)=>`Pokemon top tier ${selectedPoke}`)

console.log(topTierPikachu)