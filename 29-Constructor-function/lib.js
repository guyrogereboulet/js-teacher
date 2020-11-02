//Gli oggetti in Javascript possono essere creati in diversi modi

let obj = {};

let obj2 = new Object();

let num = 10;

let num2 = new Number(10);

console.log(num2);


//Sappiamo che in Javascript le funzioni sono oggetti:

function User() {

}
//Se aggiungiamo la proprietà "prototype" ci rendiamo conto che è un oggetto vuoto
// console.log(User.prototype);

//Se aggiungiamo dei valori all'interno dell'oggetto ch rendiamo che la propietà "prototype" sarò riempita di tali valori

User.prototype.p1 = 10;
User.prototype.p2 = x => x ** 2;
// console.log(User.prototype);

//Proviamo ad utilizzare l'operatore "New" sulla funzione User

let user1 = new User();
let user2 = new User();
let user3 = User();

console.log(user1);
console.log(user2);

//Quando un funzione non ritorna niente, viene restituito undefined
console.log(user3);

/*Mentre Quando mettiamo la parola chiave "New" stiamo dicendo crea un oggetto dalla funzione User, la funzione user è quella che viene definita "Constructor Function" che ha 2 regole:

1 - Il nome della funzione deve avere la lettera iniziale maiuscola
2 - La funzione deve essere eguita facendola precedere dall'operatore "New"

Quello che viene creato è un oggetto che eredita propietà e metodi dell'oggetto User.prototype.
*/
console.log(user1.p1);
console.log(user1.p2(8));
console.log(user2.p1);
console.log(user2.p2(3));
 
//Le constructor function sono in pratica delle funzioni produttrici di oggetti, oggetti che andranno ad ereditare proprietà e metodi definiti all'interno dell'oggetto prototype della constructor function