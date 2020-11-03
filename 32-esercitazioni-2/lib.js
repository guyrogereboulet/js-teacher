// 1) Scrivere una funzione che accetta una stringa e restituisce la parola più lunga all'interno della stringa

function maxString(str) {

    let stringa = str.split(" ");
    let max = stringa[0];

    for (let i = 0; i< stringa.length; i++) {
        
      max = stringa[i].length > max.length ? stringa[i] : max;
        
    }

    return max;

}

let frase = "Javascript non è Java"

let result = maxString(frase);

console.log(result);


// 2) scrovere una funzione ricorsiva che, dato un valore x e un valore n, esegue la potenza di x alla n






// 3) Scrivere una funzione che ritorna una stringa casuale di n caratteri



// 4) Scrivere una funzione che inverte il contenuto di una stringa