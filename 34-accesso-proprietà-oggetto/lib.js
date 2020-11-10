let user = {
    //Internamente il motore javascript traforma le chiavi delle proprietà in stringa, quindi anche noi possiamo racchiudere una chiave in doppie apici
    "name" : "Gianluca",
    4 : "ciao",
    "buon giorno" : "salve"

};

let nome = "name";

console.log(user.name);

//Se usiamo come chiave degli identificatori non validi come le variabili di tipo "number" dobbiamo racchiudere la chiave in parentesi quadre per accedere alla proprietà
console.log(user[4]);
console.log(user[2+2]);
console.log(user[2*2]);
console.log(user["buon giorno"]);

//In questo caso abbiamo undefined perche il motore javascript cerca la proprietà "nome" nell'oggetto "user" e non trovandola restituisce undefined.
console.log(user.nome);


//in questo caso il motore javascript cerca una variabile "nome" e se la trova la sostituisce con il suo contenuto.
console.log(user[nome]);





