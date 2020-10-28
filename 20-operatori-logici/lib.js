/*

&& (AND)

espressione1 && espressione2

se espressione1 è true ritorna espressione2
se espressione1 è false ritorna espressione1

|| (OR)

espressione1 || espressione2

se espressione1 è true ritorna espressione1
se espressione1 è false ritorna espressione2


! (NOT)

!espressione

se espressione è true ritorna false
se espressione è false ritorna true


*/

//&& (AND)
// 2 può essere convertito in true quindi il log restituisce 0
console.log(2 && 0);


// || (OR)
// 2 può essere convertito in true quindi il log restituisce 0
console.log(2 || 0);
console.log(0 || 2);
console.log(0 || undefined);


//! (NOT) 
// è un operatore unario che agisce su una singola espressione, se l'espressione potà essere convertita a false restituirà false

console.log(!0);

console.log(!10);

console.log(!true);

console.log(!false);


//esempio
 let v = 19;
 let g = "pioggia";

 if (( v >= 18 && v < 22 ) && (g == "sole" || g == "nuvolosa" )) {

    //True
    //True
    //False
    //False

    // True && False 
    // False

    //Quindi non visualizzeremo "passeggiata"

    console.log("passeggiata");

 }








 