import MyArray from "./Estructuras/array.js";
import HashTable from "./Estructuras/HashTable.js";
import MySinglyLinkedList from "./Estructuras/singly.js";

/* let myArray = new MyArray();

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

console.log(myArray.unshift("Negro")); */

/* const myHastTable = new HashTable(50);

console.log(myHastTable.set("Diego", 1990));
console.log(myHastTable.set("Mariana", 1998));
console.log(myHastTable.set("Mariana", 1997));
console.log(myHastTable.set("Manuela", 1997));
console.log(myHastTable.set("Josefina", 1997));
console.log(myHastTable.set("Jose", 2000));

console.log(myHastTable.get("Jose"));
console.log(myHastTable.get("Mariana"));

console.log(myHastTable.getAllKeys());

console.log(myHastTable.remove("Mariana"));
console.log(myHastTable.remove("Mariana"));

console.log(myHastTable.getAllKeys()); */

let myLinkedList = new MySinglyLinkedList(2);

console.log(myLinkedList);

myLinkedList.append(4);
console.log(myLinkedList);

myLinkedList.append(5);
console.log(myLinkedList);

myLinkedList.prepend(1);
console.log(myLinkedList);

console.log(myLinkedList.insert(3, 3));

console.log(myLinkedList.remove(5));
