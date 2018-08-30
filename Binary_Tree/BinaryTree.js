
class BinaryTree{

  constructor(root){
    if(!arguments.length)
      this.root = null;
    else
      this.root = root;
  }

  addNode(n){
    var node = new Node(n)

    if(this.root == null){
      this.root = node;
      this.root.isroot = true;
      this.root.x = windowWidth/2;
      this.root.y = 100;
    }
    else{
      this.root.addNode(node, 300);//addNode function here is from Node class
     }
  }

  traverse(){
    this.root.visit();
  }

  search(num){
    var found_node = this.root.search(num);
    if(found_node != null)
      console.log("Found " + found_node.value);
    else
      console.log("Not found!")
  }

}
