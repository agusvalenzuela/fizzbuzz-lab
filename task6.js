// Refer to Task 6 in your Instructions to complete this task


import promptSync from 'prompt-sync';

console.log("This is Task Five!");

const numero = parseInt(promptSync()("Ingrese un número entero positivo: ")) + 1;
let resultados = [];

for (let i = 1; i < numero; i++) {
    if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
      console.log("FizzBuzzWoof")
      resultados.push("FizzBuzzWoof")
    } else if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz")
      resultados.push("FizzBuzz")
    } else if (i % 3 == 0 && i % 7 == 0) {
      console.log("FizzWoof")
      resultados.push("FizzWoof") 
    } else if (i % 5 == 0 && i % 7 == 0) {
      console.log("BuzzWoof")
      resultados.push("BuzzWoof")
    } else if (i % 3 == 0) {
      console.log("Fizz")
      resultados.push("Fizz")
    } else if (i % 5 == 0) {
      console.log("Buzz")
      resultados.push("Buzz")
    } else if (i % 7 == 0) { 
      console.log("Woof") 
      resultados.push("Woof")
    } else {
      console.log(i)
      resultados.push(i)
    } 
  }
console.log("Resultados almacenados en el array:" + resultados.length);