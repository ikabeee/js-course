/**
 * * Los piratas de One Piece buscan las frutas del diablo. Para ello, guardan en un registro las frutas que ya poseen.
* * 1. Crea un arreglo llamado `frutas` con los valores: `['Gomu Gomu', 'Mera Mera', 'Hito Hito']`.
* * 2. Durante su viaje, encuentran la fruta `Suke Suke` y la añaden a su registro.
* * 3. Chopper decide que no quiere que otros usen la `Hito Hito`, así que la quitan del registro.
* * 4. Usando `filter()`, crea un nuevo arreglo que contenga solo las frutas que tienen "Mera" en su nombre.
* * 5. Imprime la lista de frutas filtradas usando `forEach()`. 
 */

/* Example */
const pirates = [
    {
        name: "Luffy",
        reward: 10000,
    },
    {
        name: "Zoro",
        reward:10000,
    },
    {
        name: "Sanji",
        reward: 2134,
    },
    {
        name: "Sanji",
        reward: 233,
    },
    {
        name: "Usopp",
        reward: 5001,
    }
]

const greatReaward = pirates.filter((pirate)=> pirate.reward>=5000);
greatReaward.forEach((reward)=> console.log(reward))



// const fruits = ['Gomu Gomu', 'Mera Mera', 'Hito Hito'];
// fruits.push('Suke Suke');
// fruits.splice(2,1);
// const meraFruits = fruits.filter((fruit) => fruit.includes('Mera'));
// meraFruits.forEach((fruit) => console.log(fruit));