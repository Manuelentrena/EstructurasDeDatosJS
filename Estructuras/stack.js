class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top.value;
  }

  push(value) {
    const newNode = new Node(value);
    this.length === 0 ? (this.bottom = newNode) : (this.top.next = newNode);
    this.top = newNode;
    this.length++;
  }

  pop() {
    let curretNode = this.bottom;
    for (let i = 0; i < this.length - 2; i++) {
      curretNode = curretNode.next;
    }
    this.top.value = null;
    this.top = curretNode;
    this.top.next = null;
    this.length--;
  }
}

export default Stack;
