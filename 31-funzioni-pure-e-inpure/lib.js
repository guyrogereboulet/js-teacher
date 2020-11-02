//Le constructor function sono in pratica delle funzioni produttrici di oggetti, oggetti che andranno ad ereditare proprietà e metodi definiti all'interno dell'oggetto prototype della constructor function

function User() {

    //Per farsi che ogni "new User", abbia una copia delle proprietà definiti nella function Constructor "User" dobbiamo usare il "this"

    this.name = "";
    this.age = null;
    // Seil valore di una proprietà sarà la stesso, non ha senso definirlo con il this.
    
    // this.type = "utente Standard";
}

// è più efficente fare ereditare tale proprietà con il metodo prototype
User.prototype.type = "utente Standard";

let user1 = new User();
let user2 = new User();
let user3 = new User();

//in questo modo riusciamo ad accedere alla proprietà type definita sull'oggetto prototype 
// console.log(user1.type);
// console.log(user2.type);


//Se facciamo un console log delle oggetto, vediamo che l'oggetto si è riempito delle propietà defdinite in precedenza

console.log(user1);
console.log(user2);

user1.name = "Guy";
user2.name = "Gianluca";

console.log(user1);
console.log(user2);
