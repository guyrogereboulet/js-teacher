
/* 

Opertori aritmetici +-/*
Modulo %
Esponente ** 
Incremento e decremento

*/

//Moltiplicazione
let ris = 10 + 3 * 2;
console.log(ris);

//Moltiplicazione con parentesi
let ris2 = (10 + 3) * 2;
console.log(ris2);

//Modulo
let ris3 = 10 % 3;
console.log(ris3);

//Esponente
let ris4 = 2**3;
console.log(ris4);


//INCREMENTO//
//post incremento restituisce prima il numero e poi incrementa la variabile
let num = 1;
console.log(num++);

//pre incremento incrementa il numero e restituisce la variabile
let num1 = 1;
console.log(++num1);


//DECREMENTO//
let num2 = 5;
console.log(num2--);

//pre incremento incrementa il numero e restituisce la variabile
let num3 = 5;
console.log(--num3);

//Con il metodo ".isSafeInteger" chiediamo a javascript se la variabile è un numero sicuro o meno
let numeroGrande = Number.MAX_SAFE_INTEGER + 10;
console.log(Number.isSafeInteger(numeroGrande));

//L'oggetto Math fornisce molte proprietà e metodi per lavorare con i numeri.

console.log(Math);
console.log(Math.random());
console.log(Math.random() * 1000);

let casuale = Math.random() * 1000;
casuale = Math.trunc(casuale);
console.log(casuale);













