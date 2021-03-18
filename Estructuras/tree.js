class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  search(value, currentNode = this.root) {
    if (currentNode === null) {
      return "Elemento no encontrado";
    } else if (value > currentNode.value) {
      return this.search(value, currentNode.right);
    } else if (value < currentNode.value) {
      return this.search(value, currentNode.left);
    } else {
      return currentNode;
    }
  }
}

export default BinarySearchTree;
