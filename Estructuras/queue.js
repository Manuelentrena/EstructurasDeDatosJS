class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top.value;
  }

  enqueue(value) {
    const newNode = new Node(value);
    this.length === 0 ? (this.top = newNode) : (this.bottom.next = newNode);
    this.bottom = newNode;
    this.length++;
  }

  dequeue() {
    if (this.length === 1) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;

    return this;
  }
}

export default Queue;
