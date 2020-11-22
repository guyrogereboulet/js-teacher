// Astrazione

function User (name, altezza) {
    let privata = "Informazione privata";
    this.name = name;
    this.altezza = altezza;
    let pesoIdeale = () => {
        return `Peso ideale ${this.CalcolaPesoIdeale()}`;
    };
    this.CalcolaPesoIdeale = function () {
        return altezza - 100 * 0.95;
    };


}

//Definiamo una funzione user prototype
User.prototype.type = "Utente Standard";

console.log(User.prototype);


//Creiamo un nuovo oggetto "User"
let user1 = new User("Simone", 175);
//Accediamo alla funzione CalcolaPesoIdeale
console.log(user1.CalcolaPesoIdeale());
//Non poossiamo accedere alla variabile "privata", ci verrà restituito undifined
console.log(user1.privata);
//Non possiamo accedere alla proprietà "privata" perché non è una funzione
console.log(user1.pesoIdeale());




