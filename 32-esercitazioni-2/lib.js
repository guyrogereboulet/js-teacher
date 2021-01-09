// 1) Scrivere una funzione che accetta una stringa e restituisce la parola più lunga all'interno della stringa

function maxString(str) {
    // Trasformiamo un la stringa "str" passata nella funzione in un array
    let parole = str.split(" ");
    //Definiamo una variabile che conterrà la parola più lunga con posizione 0 nell'array stringa
    let max = parole[0];

    for (let i = 0; i< parole.length; i++) {

        /*Nel caso in cui la stringa che si trova nell'array "parole" è maggiore della lunghezza della stringa della variabile "max" allora assegnamo a "max" "parole" altrimenti riassegnamo max
        */
        max = parole[i].length > max.length ? parole[i] : max;

        //Operatore ternario

        /*

        condizione ? espressione1 : espressione2

        ? => ritorniamo

        : => altrimenti
        
        */
        
    }

    return max;

}

let frase = "Javascript non è Java"

let result = maxString(frase);

console.log(result);


// 2) scrivere una funzione ricorsiva che, dato un valore x e un valore n, esegue la potenza di x alla n

function esponente (x, n) {

    if (x == 1) {

        return 1;

    }

    return  n == 1 ? x : x * esponente(x, n -1);
 };

 let ris = esponente(7,2);

 console.log(ris);

// 3) Scrivere una funzione che ritorna una stringa casuale di n caratteri

// Dichiaramo una variabile con tutti i caratteri
let caratteri ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(n) {
    let result = ' ';
    let lunghezza = caratteri.length;
    for ( let i = 0; i < n; i++ ) {
        result = result + caratteri.charAt(Math.floor(Math.random() * lunghezza));
    }

    return result;
}


console.log(generateString(5));




// 4) Scrivere una funzione che inverte il contenuto di una stringa


// function invertiStringa(stringa) {
//     let arrayStringa = stringa.split(' ');
//     let arrayVuoto = [];
    
//     for( var i = arrayStringa.length - 1; i >= 0; i-- ) {

//         arrayVuoto.push(arrayStringa[i]);
        
        
//     }
    
//     console.log(arrayVuoto.join(' '));

    

//     return arrayVuoto ;
// }



// let res = invertiStringa("Io sono una mamma");

// console.log(res);


function invertiStringa(stringa) {
    return stringa.split(' ').reverse().join("");
} 

let invertita = invertiStringa("Mi chiamo Guy");

console.log(invertita);



