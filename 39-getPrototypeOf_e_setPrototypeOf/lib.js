/*

Nella Catena dei prototipi abbiamo:
1)  null
2) Object.prototype
3) ferrari
4) ferrari_458
5) ferrari_458_special


*/



// let obj = {}; //new object()

// console.log(obj.__proto__ == Object.prototype);

//Commit
//commit


function Ferrari () {

}

Ferrari.prototype.marchio = `\u{00A9} Ferrari`;

let ferrari_458 = new Ferrari();

let ferrari_458_special = Object.create(ferrari_458);

console.log(ferrari_458_special.__proto__.__proto__.__proto__.__proto__);






