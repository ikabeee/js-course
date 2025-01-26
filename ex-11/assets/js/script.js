/*
 * Arrow functions
! Funciones no dependen de un objeto 
Las funciones no dependen de un objeto

 */


const sum =(firstNumber, secondNumber)=>{
    let num1 = firstNumber;
    let num2= secondNumber;
    let sum = num1 +num2;
    document.write(`${sum} <br>`)
}

sum(399,299);

const subtract =(firstNumber, secondNumber)=> firstNumber -secondNumber;

document.write(subtract(45, 62))