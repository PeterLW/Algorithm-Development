class Graph{
  constructor(){
    this.nodes = [];
    this.graph = {};
    this.start = null;
    this.end = null;
  }

  addNode(node){
    this.nodes.push(node);
    this.graph[node.value] = node;
  }

  getNode(name){
    // console.log('here')
    return this.graph[name];
  }

}
