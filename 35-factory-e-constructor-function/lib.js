//Funzione letterale

//In questo modo non rispettiamo il principio OPP della non ridondanza del codice
let user1 = {
    "name" : "Gianluca",
    "descrivimi" : () => `Nome: ${this.name}`
};

let user2 = {
    "name" : "Arianna",
    "descrivimi" : () => `Nome: ${this.name}`
};

let user3 = {
    "name" : "Mario",
    "descrivimi" : () => `Nome: ${this.name}`
};

console.log(user1);



//Factory function 
function user(nome) {
    let obj = {
        "name" : nome,
        "descrivimi" : () => `Nome: ${this.name}`
    };

    return obj;
}


let user4 = user("Maria");
console.log(user4);


//Constructor Function
function Utenti (nome) {
    this.name = nome;
    this.descrivimi = () => `Nome: ${this.name}`;
}

let user5 = new Utenti("Noemi");
console.log(user5);


/* Sia con la factory function che con la constructor function possiamo creare degli oggetti senza duplicare il codice */





