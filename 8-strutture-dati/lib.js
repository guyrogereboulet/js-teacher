//Oggetti

// let casa_indirizzo = "Via dei Greci, 10";
// let casa_piani = 3;
// let casa_mq = 80;

// let casa = {
//   indirizzo : "Via dei Greci, 10",
//   piani: 3,
//   mq : 80
// }

// console.log(casa.indirizzo + " " + casa.piani + " " + casa.mq);

let ferrari = {
  modello : "458",
  motore : {
    cilindrata : 1600,
    cavalli : 720,
    coppia_max: 900
  },
  descrivimi: function () {
    return "Ferrari 458 da 720 cavalli"
  }
};

ferrari.colore = "rosso";

console.log(ferrari.colore);


console.log(ferrari.descrivimi());



//Array

let voto_1 = 29;
let voto_2 = 26;
let voto_3 = 23;
let voto_4 = 27;

let voti = [29, 26, 23, 27];
console.log(voti[1]);
for (let index = 0; index < voti.length; index++) {

  console.log(voti[index]);
  
}
//oppure
for (voto of voti) {

  console.log(voto);
  
}

let audi = [
  {modello : "458", cavalli : 720},
  { modello: "california", cavalli: 630 },
  { modello: "599 GTO", cavalli: 880 }
];

for (const typeaudi of audi) {
  console.log(typeaudi.modello + " " + typeaudi.cavalli);
  
  
}






