class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    /* Obligar al crear la instancia que tenga un elemento por defecto */
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(index, value) {
    if (index <= 0) return undefined;

    if (index === 1) {
      return this.prepend(value);
    }

    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    let previewNode = this.getTheIndex(index);
    newNode.next = previewNode.next;
    previewNode.next = newNode;
    this.length++;

    return this;
  }

  getTheIndex(index) {
    let previewNode = this.head;
    for (let i = 0; i < index - 2; i++) {
      previewNode = previewNode.next;
    }

    return previewNode;
  }

  remove(index) {
    if (index <= 0 || index > this.length) return undefined;

    const previewNode = this.getTheIndex(index);
    if (index === 1) {
      this.head = previewNode.next;
    } else {
      const removedNode = previewNode.next;
      previewNode.next = removedNode.next;
    }
    this.length--;

    return this;
  }
}

export default MySinglyLinkedList;
