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

ferrari_458_special.colore ="nero";

console.log(ferrari_458_special.colore);






