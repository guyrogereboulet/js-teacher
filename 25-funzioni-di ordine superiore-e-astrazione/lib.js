// Funzioni e astrazione

/* 
L'astrazione, in informatica è l'applicazione del metodo logico di astrazione, nella strutturazione della descrizione dei sistemi informatici complessi, per facilitare la progettazione e manuntenzione o la stessa comprensione

La pratica consiste nel presentare il sistema, ad esempio un pezzo di codice sorgente, in maniera ridotta ai soli dettagli considerati essenziali all'interesse specifico, ad esempio raggruppando il codice in una funzione. 
*/

let a = [10,20,30,40,50];
let tmp = [];
let len = a.length;

for(i = 0; i < len; i++) {

    tmp.push(a.pop());
}

console.log(tmp);

let tmpLength = tmp.lenght;


for(j = 0 ; j < len; j++) {

    a.push(tmp.shift());
}

console.log(a);

//Lavorazione con funzioni di ordine superiori

let b = [1,2,3,4,5];
console.log(b.reverse());
















 