let ferrari = {
    marchio : "Ferrari",
    dal: 1921,
    dolore:"rosso"
};

let ferrari_458 = Object.create(ferrari);
ferrari_458.cilindrata = 2000;
ferrari_458.cavalli = 680;
// ferrari_458.cavalli = "rosso opaco";

let ferrari_458_special = Object.create(ferrari_458);

console.log(ferrari_458_special.cavalli);
console.log(ferrari_458_special.colore);
console.log(ferrari_458_special.cerchi);

let obj = {};
console.log(Object);



/*

Nella Catena dei prototipi abbiamo:
1)  null
2) Object.prototype
3) ferrari
4) ferrari_458
5) ferrari_458_special


*/











