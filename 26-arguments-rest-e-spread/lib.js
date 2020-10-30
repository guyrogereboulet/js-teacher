//In javascript i pèarametri passati a una funzione sono disponibili anche con l'oggetto "arguments", è un oggetto simile ad un array con cui è possibile accedere agli elementi passati in input con una funzione.

function esempio() {

    //Visualizzo tutti gli elementi
    console.log(arguments);
    //Visualizzo il primo elemento
    console.log(arguments[0]);
    //Accedo a gli elementi passati in input con un ciclo for
    for(let param of arguments){

        console.log(param);

    };
}

esempio(2, "ciao", true);



function calcola(a, b) {
    console.log(a+b);
}

/*Se nell'input della funzione metto dei parametri non definiti precedentemente,
la funzione in questione li ignora*/
calcola(10,20,30,40,50);


let minimo = Math.min(10,20,30,1,0.2);
console.log(minimo);



//Operatore REST

/*
In fase di definizione della funzione mettiamo negli argomenti "..." e un identificatore come ad esempio "numeri".
*/ 
function somma (... numeri) {

    // console.log(numeri);
    let result = 0;

    for (numero of numeri) {
        result += numero;
    }

    console.log(result);
}

somma(10,20,30,40,50,33);


//Altrimenti possiamo usare anche questo metodo
function logParam(param1, param2, ...numeri) {

    console.log(param1);
    console.log(param2);
    console.log(numeri);

}


logParam(1,2,3,4,5,6);



//Spread operator => "..."
let c = [10,20,30,0.1,0.36]
//Senza lo spread operator non posso accedere agli elementi dell'array
let minimo2 = Math.min(...c);
console.log(minimo2);
//Con questo operatore si possono pure unire gli array
let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = [...array1,...array2];

console.log(array3);












 