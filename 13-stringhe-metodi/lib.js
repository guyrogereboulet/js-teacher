let str = new String("ciao");
console.log(typeof str);
console.log(String);




let obj = {
    fn : function saluta() {
        return "ciao";
    }
};

console.log(obj.fn());


let a = "Limitami a 10 caratteri";
let b = a.substr(0,10);
console.log(b);

let oggetto = {};
console.log(oggetto.toString());


//To Uppercase
let ciao = "ciao";
console.log(ciao.toUpperCase());

//To Lowercase
let mamma = "MAMMA";
console.log(mamma.toLowerCase());

//Index of
let casa = "casa";
console.log(casa.indexOf("a"));

//Last Index of 
let gianluca = "Gianluca";
console.log(gianluca.lastIndexOf("a"));

//Include
let nome = "Mi chiamo Roger";
console.log(nome.includes("Roger"));

//Split (Lo spazio fa da separatore) 
let frase = "questa è una frase";
console.log(frase.split(" "));

//Split (Lo spazio fa da separatore) 
let secondaFrase = "Prima frase; Seconda Frase";
console.log(secondaFrase.split(" "));

//Repeat
let ripetere = "ripetere";
console.log(ripetere.repeat(10));










