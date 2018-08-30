class Node{
  constructor(value){
    if(!arguments.length){
      this.value = null;
      this.left = null;
      this.right = null;
      this.isroot = false;

    }else{
      this.value = value;
      this.left = null;
      this.right = null;
      this.isroot = false;

    }
  }

  addNode(node, shift){
    if(node.value < this.value){
      if(this.left == null){
        this.left = node;
        //for drawing************************
        this.left.x = this.x - shift;
        this.left.y = this.y + 100;
        //**********************************
      }else {
        this.left.addNode(node, shift - 50)
      }
    }else if(node.value > this.value){
      if(this.right == null){
        this.right = node;
        //for drawing************************
        this.right.x = this.x + shift;
        this.right.y = this.y + 100;
        //**********************************
      }else {
        this.right.addNode(node, /*for drawing*/shift - 50)
      }
    }else{

    }
  }

  visit(){//DFS

    //for drawing********************************************
    fill(255);
    textAlign(CENTER);
    text(this.value, this.x, this.y);
    stroke(255);
    noFill();
    ellipse(this.x, this.y, 30, 30);

    if(this.left != null){
      line(this.x, this.y+15, this.left.x, this.left.y-15);
    }
    if(this.right != null){
      line(this.x, this.y+15, this.right.x, this.right.y-15);
    }
    //**************************************************

    if(this.left != null){
      this.left.visit();
    }
    console.log(this.value);
    if(this.right != null){
      this.right.visit();
    }
  }

  search(num){
    var found = null;
    if(this.value != num){
      if(num < this.value && this.left != null){
        found = this.left.search(num);
      }
      else if(num > this.value && this.right != null){
        found = this.right.search(num);
      }
    }else {
      return this;
    }

    return found;

  }



}
