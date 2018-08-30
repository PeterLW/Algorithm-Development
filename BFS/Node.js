class Node{
  constructor(value){
    this.value = value;
    this.edges = [];
    this.visited = false;
    this.parent = null;
  }

  addEdge(e){
    this.edges.push(e);
    //bidirection
    e.edges.push(this);
  }
}
