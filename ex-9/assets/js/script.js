/*
 * Functions
! Funciones no dependen de un objeto 
Las funciones no dependen de un objeto

 */

function sum(){
    let firstNumber = 5;
    let secondNumber = 10;
    let sum = firstNumber + secondNumber;
    document.write(`${sum} <br>`)
}

function subtract(){
    let firstNumber = 5;
    let secondNumber = 10;
    let subtract = firstNumber - secondNumber;
    return subtract;
}

sum();
subtract();

let subtracts = subtract();
document.write(subtracts)