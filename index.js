import MyArray from "./Estructuras/array.js";
import HashTable from "./Estructuras/HashTable.js";
import MySinglyLinkedList from "./Estructuras/singly.js";
import MyDoublyLinkedList from "./Estructuras/doubly.js";
import MyStack from "./Estructuras/stack.js";
import Queue from "./Estructuras/queue.js";
import BinarySearchTree from "./Estructuras/tree.js";
import Graph from "./Estructuras/graphs.js";

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

/* let myLinkedList = new MySinglyLinkedList(2);

console.log(myLinkedList);

myLinkedList.append(4);
console.log(myLinkedList);

myLinkedList.append(5);
console.log(myLinkedList);

myLinkedList.prepend(1);
console.log(myLinkedList);

console.log(myLinkedList.insert(3, 3));

console.log(myLinkedList.remove(5)); */

/* let mydoublyList = new MyDoublyLinkedList(2);

console.log(mydoublyList);

console.log(mydoublyList.append(3));

console.log(mydoublyList.prepend(0));

mydoublyList.show();

console.log(mydoublyList.insert(2, 9));

mydoublyList.show();

console.log(mydoublyList.insert(0, 56));

mydoublyList.show();

console.log(mydoublyList.insert(3, 100));

mydoublyList.show(); */

/* const myStack = new MyStack();

myStack.push(45);
myStack.push(23);
myStack.push(67);

console.log(myStack);

console.log(myStack.peek());
console.log(myStack.peek());
console.log(myStack.peek());

myStack.pop();

myStack.push(66);
myStack.push(89);

console.log(myStack);

myStack.pop();
myStack.pop();

console.log(myStack);

myStack.pop();

console.log(myStack);

myStack.pop();

console.log(myStack); */

/* const queue = new Queue(); */

/* queue.enqueue(93);
console.log(queue.peek());
queue.enqueue(45);
console.log(queue.peek());
queue.enqueue(21);
console.log(queue.peek());
console.log(queue.dequeue());
queue.enqueue(34);
console.log(queue.peek());
queue.enqueue(78);
console.log(queue.peek());
console.log(queue.dequeue());
queue.enqueue(100);
console.log(queue.peek());

console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue()); */
/* console.log(queue.dequeue()); */

/* const tree = new BinarySearchTree();
tree.insert(10);

tree.insert(4);
tree.insert(20);
tree.insert(2);
tree.insert(8);
tree.insert(7);
console.log(tree);
console.log(tree.search(6));
console.log(tree.search(8)); */

const graph = new Graph();

// Vértices
graph.addVertice("1");
graph.addVertice("3");
graph.addVertice("4");
graph.addVertice("5");
graph.addVertice("6");
graph.addVertice("8");

// Conexiones
graph.addConex(8, 4);
graph.addConex(4, 1);
graph.addConex(1, 3);
graph.addConex(1, 6);
graph.addConex(3, 6);
graph.addConex(3, 5);
graph.addConex(5, 4);

console.log(graph);
