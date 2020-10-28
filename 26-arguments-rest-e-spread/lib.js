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

















 