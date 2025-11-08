// Refer to Task 7 in your Instructions to complete this task


import promptSync from 'prompt-sync';

console.log("This is Task Seven!");

const numeroUser = parseInt(promptSync()("Ingrese un número entero positivo: "));
let resultados = [];
let buzzWords = ["Fizz", "Buzz", "Woof", "Bark", "Awoo", "Bang"];

for(let numero = 1; numero <= numeroUser; numero++){
    let esPrimo = true;
    
    for(let div = 2; div < numero; div++){
      if(numero % div === 0){
        esPrimo = false;
        break;
      }
    }
    let randomWord = buzzWords[Math.floor(Math.random() * buzzWords.length)];
    
    if(esPrimo){
      console.log(randomWord);
    } else{
        if (numero % 3 == 0 && numero % 5 == 0 && numero % 7 == 0) {
          console.log("FizzBuzzWoof")
        } else if (numero % 3 == 0 && numero % 5 == 0) {
          console.log("FizzBuzz")
        } else if (numero % 3 == 0 && numero % 7 == 0) {
          console.log("FizzWoof")
        } else if (numero % 5 == 0 && numero % 7 == 0) {
          console.log("BuzzWoof")
        } else if (numero % 3 == 0) {
          console.log("Fizz")
        } else if (numero % 5 == 0) {
          console.log("Buzz")
        } else if (numero % 7 == 0) { 
          console.log("Woof") 
        } else {
          console.log(numero)
        } 
  }
  }
