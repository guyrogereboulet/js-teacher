/* Il processo di conversione di un dato da un altro viene chiamato processo di coecerzione, e ci sono 2 tipi coercizioni:

1) esplicita:
Dove siamo noi programmatori che diamo la trasformazione di un valore da un tipo ad un altro, come per esempio il "!!" che forza un valore al suo relativo valore booleano.

2) implicita:
Javascript per procedere con la richiesta deve fare diventare gli elementi dello stesso tipo. In javascript abbiamo 3 tipi di conversione:

- number:
> >= < <= == + * - %

- string: + 

- boolean: if/ while / for

*/


//String (se uno degli elementi è di tipo string javascript forza la concatenazione trasforma gli altri elementi in tipo string).

let num1 = "3" + 10;
console.log(num1);

let num2 = "ciao" + null;
console.log(num2);

let num3 = 3 + "ciao";
console.log(num3);


//Number( Quando javascript trasforma una un tipo di elemento a anumero la prima cosa che fa è di elimirare spazi e carratteri du new line)

let num4 = 2 + null;
console.log(num4);

let num5 = true + null;
console.log(num5);

let num6 = false + null;
console.log(num6);

let num7 = "30" == 30; 
console.log(num7);

let num8 = 3> "2\t\n";
console.log(num8);


//Booleano
/* Da ricordare che ci sono anche dei casi speciali come:

1- In una ugualianza, null e undefined non vengono trasformati in numero

2- NaN noin è uguale a nient'altro, nemmeno a NaN.

*/

let num9 = null == 0;
console.log(num9);


let num10 = null == null;
console.log(num10);

let num11 = null == undefined;
console.log(num11);








 