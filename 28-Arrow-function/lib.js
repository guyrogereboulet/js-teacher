//Le arrow function sono un nuovo tipo di funzione anonima introdotta in ecmascript 2016 e danno una funzione compatta e più leggibile.

let fn_a = function (x) {
 return x * Math.PI;
}
console.log(fn_a(2));


//Stessa funzione con l'arrow function
let fn_b = (x) => {
 return x * Math.PI;
}
console.log(fn_b(2));


//Quando abbiamo un solo parametro in input possiamo ulteriormente semplificare la arrow function, e se la funzione ritorna una solo linea di codice non è necessario inserire la parola chiave return e le parentesi graffe

let fn_c =  x=> x * Math.PI;

console.log(fn_c(2));

//Le arrow function son particolarmente adatte come callback e sappiamo che una call back è una funzione passata come parametro di un altra funzione.
 let a = [1, 2, 3, 4, 5, 6];

 //La funzione filter richiede una callback
 let b = a.filter(function(x) {
    return x%2 == 0;
 })
 console.log(b);

 //Facciamo la stessa cosa con aun arrow function

 let c = a.filter(x => x%2 == 0);
console.log(c);
 





 