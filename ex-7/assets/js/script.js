
/*
* Associative Arrays
* key -> value
*/

let flowers = {
    "Lily": 10,
    "Daisy": 20,
    "Sunflower": 39,
    "Orchid": 30,
}
/* 
* Basic for
* i = iteration
* j = i replacement
* c = counter
* k = key is for associative array
*/


let lilyQuantity = flowers.Lily;
document.write(`${lilyQuantity}<br>`)
document.write(`${flowers.Daisy}<br>`)
document.write(`${flowers['Orchid']}<br>`)
/* Doesn't work if  */
document.write(`${flowers[4]}<br>`)

document.write(`<br>`);
for (let key in flowers){
    document.write(`${key}: ${flowers[key]}<br>`)
}

document.write(`<br>`)
/* Object.entries retrieve an array of an object's enumerable property [key, value] pairs. */
for (let [key, value] of Object.entries(flowers)){
    document.write(`${key}: ${value}<br>`)
}