class Graph {
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }

  addVertice(node) {
    this.adjacentList[node] = [];
    this.nodes++;
  }
  addConex(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
}

export default Graph;
