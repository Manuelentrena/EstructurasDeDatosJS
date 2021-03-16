import MyArray from "./Estructuras/array.js";

let myArray = new MyArray();

console.log(myArray.push("Manuel"));
console.log(myArray.push("Paco"));
console.log(myArray.push("Ana"));
console.log(myArray.push("Alicia"));
console.log(myArray.push("Pedro"));

console.log(myArray.pop());

console.log(myArray.show());

console.log(myArray.delete(1));

console.log(myArray.show());

console.log(myArray.shift());

console.log(myArray.show());

console.log(myArray.push("Azul"));
console.log(myArray.push("Verde"));
console.log(myArray.push("Cuñado"));
console.log(myArray.push("Amarillo"));

console.log(myArray.length);

console.log(myArray.unshift("Negro"));
