//Passaggio per valore 

//I tipi number, string, boolean, null e undefined sono passati per valore

let a = 10;
let b = a;
a = 8;

console.loga
console.log(b);




//Passaggio per riferimento

//Una modifica fatta in A si rispecchiera in B e uan modifica fatta in B si rispecchiera in A

// Questo passaggio vale per (oggetti, array, funzione)

let obj1 = {
    p1: 10,
}
let obj2 = obj1;

obj1.p1 = 20;
console.log(obj2.p1);

obj2.p1 = 1.2;
console.log(obj1.p1);


console.log({} == {});
console.log(obj1 == obj2 );
console.log(obj1 === obj2 );









 