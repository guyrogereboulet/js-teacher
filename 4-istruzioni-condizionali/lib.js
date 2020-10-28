
//CONDIZIONI IF AND ELSE
let azione;
let votoEsame = 18;

if(votoEsame < 18) {
  azione = "rimango a studiare";
}
else if (votoEsame < 26){
  azione = "faccio una passeggiata";
}
else {
  azione = "faccio un viaggio";
}

console.log(azione);


//OPERATORE TERNARIO
let esameSuperato, voto = 22;

// if ( voto > 18) {
//   esameSuperato = true;

// } else {
//   esameSuperato = false;
// }

// console.log(esameSuperato);

esameSuperato = voto >= 18 ? true : false;
console.log(esameSuperato);






//SWITCH
let votoRicevuto = 2;
let valutazione;

switch (votoRicevuto) {
  case 1: valutazione = "pessima"; break;
  case 2: valutazione = "scarsa"; break;
  case 3: valutazione = "media"; break;
  default : valutazione = "Molto buona";
}

console.log(valutazione);
