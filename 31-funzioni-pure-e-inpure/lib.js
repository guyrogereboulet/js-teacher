//Le funzioni pure e inpure sono un concetto fondamentale nella programmazione funzionale

/*
Javascript è un linguaggio multiparadigma che supporta sia la programmazione funzionale che quella orientata ad oggetto


Nella Programmazione Funziona (FP)
Una funzione dipende solo dai suoi dati in Input, questo tipoi di funzione è chiamata "Funzione deterministica"

*/

// Funzione  inpura deterministica


// function calcola(a, b, c) {
    
//     console.log(`Effettuo la somma tra ${a}, ${b} e ${c}.`);
//     let somma = a + b + c;
//     return somma
// }

// Se nell'input della funzione diamo sempre gli stessi parametri l'output sarà sempre lo stesso indipendentemente dal punto in cui invochiamo la funzione
// console.log(calcola(1,2,3));

// Funzione inpura non deterministica

// In questo caso la funzione non si basa solamante sui dati in input ma anche sui dati della variabile esterna "somma", e quindi l'output può cambiare in base a quando viene invovcata la funzione

// let somma = 0;
// function calcola(a, b, c) {
    
//     console.log(`Effettuo la somma tra ${a}, ${b} e ${c}.`);
//     somma = a + b + c;
// }

//Funzione Pura

//Una funzione per essere definita pura non deve produrre effetti collaterali nel mondo esterno, invocare per esempio il 'console.log' vuol dire che viene mostrata un informazione e questo è un effetto collaterale

//Modifichiamo il codice per rendere la funzione "calcola" pura:

function calcola(a,b,c) {
    let somma = a + b +c;
    return somma;
}

let sum = calcola(1,2,3)