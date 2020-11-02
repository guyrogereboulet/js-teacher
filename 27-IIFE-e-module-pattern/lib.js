//una function expression è una funzione che viene assegnata a una variabile

//Per invocarla immediatamente la racchiudiamo dentro le parentesi

// Questa funzione viene chiamata "IIFE": IMMEDIATELY INVOKED FUNCTION EXPRESSION
//(è una funzione "usa e getta" che viene usata una sola volta)
// Non possiamo accedere alle variabili al difuori della funzione 

let calcola = (function(a,b) {

    var fattore = 1.2;
    var result = (a + b) * fattore;

    //metto l'operatore unario "+" per trasformare la stringa in numero

    console.log(+result.toFixed(2));

}) (2,4);


/*
In particolare le IIFE venivano utilizzate per implementare i pattern, in particolare i "Module Pattern" un modello che definisce la modalità di risoluzione di un determinato problema, il module pattern utilizza un IIFE e restituisce una soluzione a diversi problemi
*/


let Chat = (function () {

    function chat(tipo) {
        if(tipo == "mobile") {
            startChatMobile();
        } else {
            starChat();
        }

    }

    function starChat() {

        console.log("Sto avviando la chat...");
        
    }

    function startChatMobile() {

        console.log("Sto avviando la chat mobile...");
        
    }


    return {

        init: function (tipo) {
            chat(tipo);
        }
    }


}) ();

//Invochiamo la funzione e accediamo all'oggetto Init, al cui interno si trova un funzione anonima
// Chat.init("casa");

/*
Non possiamo accedere alle funzioni della variabile "App" possiamo accedere solamente allo oggerro restituito dalla IIFE "return", è come le se le funuzioni siano private quindi non accessibili all'esterno mentre dentro il "return" ci sono le uniche informazioni pubbliche accessibili dall'esterno.


*/ 












 