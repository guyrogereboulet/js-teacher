// La coercizione esplicita è quella richiesta da noi

//conversione tipo numero, si usa il metodo primitivo "Number".

console.log(Number("2"));

console.log(Number(" "));

console.log(Number(null)); 

console.log(Number(false));

console.log(Number(true));

console.log(Number("ciao"));
 

//conversione tipo string, si usa il metodo primitivo "String".

console.log(String(2));

console.log(String(null));

console.log(String(true));


//conversione tipo booleano, si usa il metodo primitivo "Boolean".

// Queste conversioni saranno sempre false

console.log(Boolean(false));

console.log(Boolean(" "));

console.log(Boolean(NaN));

console.log(Boolean(0));

console.log(Boolean(-0));

// Queste conversioni saranno sempre vere

console.log(Boolean(1));

console.log(Boolean("0"));

// Per conversioni rapide in booleano si possono usare "!!"

console.log(Boolean(!!10));

console.log(Boolean(!!0));


// Per conversioni rapide in Number si possono usare "+"

console.log(+ "10");

console.log(+ "ciao");









 