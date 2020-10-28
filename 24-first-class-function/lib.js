
// Le funzioni sono:

/* 

- è un sottoprogramma per svolgere , in un ambiente circoscritto, determinati compiti;

- Sono definite e poi eseguite a seguito di invocazione

- Può ricevere valori in input, e restituisce sempre un valore in output

- Possono essere pure (funzioni deterministiche e senza effetti collaterali) e inpure

- Le funzioni in Javascript, sono oggetti

- Nello specifico sono oggetti di prima classe o cittadini di prima classe:

 "Nel mondo della programmazione il termine si riferisce al fatto che una determinata entità supporta tutte le modalità operative inerenti ad altre entità"

 

*/

//Function expression (Sono funzioni anonime definite da una variabile)

let fn = function() {
    console.log("ciao");
};
fn();


function ciao() {
    return "ciao";
};


function arrivederci() {
    return "arrivederci";
};

function saluta(salutoFn) {
    console.log(`${salutoFn()}`);
};


saluta(ciao);
saluta(arrivederci);

//Una funzione passata come parametro di un'altra funzione viene chiamata call back
saluta( function() {

    return "salve";
})














 