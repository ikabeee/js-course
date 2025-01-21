
/*
* Arrays
*/

const flowers=[
    "Rose",
    "Tulip"
];

/* 
* Basic for
* i = iteration
* j = i replacement
* c = counter
* k = key is for associative array
*/

document.write('Basic for')

for (let i=0; i<= flowers.length-1; i++){
    document.write(`<br> ${flowers[i]}`);
}

document.write(`<br> For in`)

for (let flower in flowers){
    document.write(`<br> ${flowers[flower]}`)
}

document.write(`<br> For of`)

for (let flower of flowers){
    document.write(`<br> ${flower}`)
}
