/**
 * * Reduce
 * * The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
 */

const team = [
    {
        name: "Narute",
        chakra: 8348498,
    },
    {
        name: "Sakura",
        chakra:5828,
    },
    {
        name: "Kakashi",
        chakra: 872498,
    },
    {
        name: "Kakashi",
        chakra: 885258,
    },
]

const totalChakra = team.reduce((accumulated, ninja) => accumulated + ninja.chakra, 0);
console.log(totalChakra)