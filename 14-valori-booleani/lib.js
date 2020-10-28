let isDeveloper = true;

if (isDeveloper) {
    console.log("developer");

} else {
    console.log("non è un developer");
}

if (4 < 3) {
    console.log("4 è minore di 3");
} else {
    console.log("4 è maggiore di 3");
}

// Javascript è keySensitive
let str1 = "ciao";
let str2 = "Ciao";

if (str1 == str2) {
    console.log("Ciao e ciao sono uguali");

} else {
  console.log("Javascript è keySensitive");
}

// In javascript ci sono alcuni valori che vengono considerati false ('', 0, -0, Nan, null, undefined)
let a = 10, b = 0, c = "ciao";
if (b) {
    console.log("vero");
} else {
    console.log("falso");
}




