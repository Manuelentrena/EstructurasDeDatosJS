class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    /* Obligar al crear la instancia que tenga un elemento por defecto */
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    debugger;
    if (index < 0) return undefined;

    if (index === 0) {
      return this.prepend(value);
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const firstNode = this.getTheIndex(index);
    /* const holdingPointer = firstNode.next; */
    newNode.next = firstNode.next;
    firstNode.next = newNode;
    newNode.prev = firstNode;
    newNode.next.prev = newNode;
    this.length++;

    return this;
  }

  getTheIndex(index) {
    let curretNode = this.head;
    for (let i = 1; i < index; i++) {
      curretNode = curretNode.next;
    }

    return curretNode;
  }

  show() {
    let nodeView = this.head;
    let arrayList = [];
    for (let i = 0; i < this.length; i++) {
      arrayList.push(nodeView.value);
      nodeView = nodeView.next;
    }
    console.log(arrayList);
  }
}

export default MyDoublyLinkedList;
