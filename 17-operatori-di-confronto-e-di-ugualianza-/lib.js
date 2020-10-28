/*Gli operatori javascript si dividono:
 
1) unari
2) Binari
3) ternari

*/

//1 - Gli operatori unari sono gli operatori che si appliccano a un singolo elemento.


// operatore di incremento
let  i = 0;
i++;

// operatore booleano ("!!" => trasformo un elemento in booleano)

let booleano = !!0;

//coercizione implicita quando ci sono 2 variabili di tipo diverso:


let num ="3\n " == 3;
console.log(num);

let num1 = -0 == "0";
console.log(num1);

let num2 = NaN == NaN;
console.log(num2);

let num3 = null == undefined;
console.log(num3);


//Con "===" viene fatto il confronto sul valore e sul tipo:

let num4 = "0" === 0;

console.log(num4);





