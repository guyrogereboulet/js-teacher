// Con il template-literal, riusciamo ad interpolare espressioni all'interno delle stringhe con il batclick.

let righe =  `Prima riga
seconda riga
terza riga
`;
console.log(righe);


//L'interpolazione di stringhe è la valutazione di una variabile all'interno di una stringa e la relativa sostituzione con il valore corrispondente.

let simona = "simona";
console.log(`Ciao da ${simona}`);


let a = 10, b = 5;
console.log(`${a} + ${b} è uguale a ${a+b}`);


function descrivimi(nome, cognome) {

    return `Mi chiamo ${nome} ${cognome}`;

}

console.log(`${descrivimi("Guy Roger", "Eboulet")}`);

















