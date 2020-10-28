// 1) Trasformare la prima lettera di ogni parola di una stringa in maiuscolo.

// function toUpperfirstLetter () {

//     let word = prompt("Inserisci una parola");
//     let firstLetter = word[0];
//     console.log(firstLetter.toUpperCase());
    
// };

// toUpperfirstLetter();

// 2) Sostituire il % con la stringa Javascript in "Maestro %. Corso JS su Udemy".

// let phrase = "Maestro %. Corso JS su Udemy";

// let str = phrase.replace("%", "Javascript")

// console.log(str);


// 3) Troncare una stringa solo se più lunga di 16 caratteri e aggiungere tre puntini finali


// let myString = "Elettroencefalograficamente";

// let lengthMyString = myString.length;

// if (lengthMyString > 16) {

//     let str = myString.slice(0, 16);
//     let res = str + "..."
//     console.log(res);
    
// } else {
//     console.log(myString);
// }



// 4) Generare un numero intero casuale tra due numeri ricevuti in input

// let number1 = parseInt(prompt("Inserisci il primo numero"));

// let number2 = parseInt(prompt("Inserisci il secondo numero"));

// function getRndInteger(min, max) {

//     let result = console.log(Math.floor(Math.random() * (max - min + 1) ) + min);

//   return result;

// }

// getRndInteger(number1, number2);




// 5) Far inserire un numero ad utente finché non si inserisce un numero pari. Quando inserisce un numero pari, mostrare nella console del browser i numeri inseriti.


let insertNumber;
let arrayNumber = [];
let result;

do {

    insertNumber = parseInt(prompt("Inserisci un numero"));
    result = arrayNumber.push(insertNumber);
    
 
} while (insertNumber % 2 != 0);

console.log(arrayNumber);












 