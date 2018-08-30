class Spot{
  constructor(i, j, x, y){
    this.f = 0;
    this.g = 0;
    this.h = 0
    this.i = i;
    this.j = j;
    this.x = x;
    this.y = y;
    this.neighbors = [];
    this.previous = null;
    this.wall = false;

    if(random(1) < 0.3){
      this.wall = true;
    }
  }

  show(w, h, color){
    if(this.wall == true){
      fill(0);
    }
    else{
      fill(color);
    }
    rect(this.x, this.y, w, h);
  }

  addNeighbors(grid, col, row){
    if(this.i < col - 1){
      this.neighbors.push(grid[this.i + 1][this.j]);
    }
    if(this.i > 0){
      this.neighbors.push(grid[this.i - 1][this.j]);
    }
    if(this.j < row - 1){
      this.neighbors.push(grid[this.i][this.j + 1]);
    }
    if(this.j > 0){
      this.neighbors.push(grid[this.i][this.j - 1]);
    }
    if(this.i > 0 && this.j > 0){
      if(grid[this.i][this.j - 1].wall == false && grid[this.i - 1][this.j].wall == false)
        this.neighbors.push(grid[this.i - 1][this.j - 1]);
    }
    if(this.i < col - 1 && this.j > 0){
      if(grid[this.i][this.j - 1].wall == false && grid[this.i + 1][this.j].wall == false)
        this.neighbors.push(grid[this.i + 1][this.j - 1]);
    }
    if(this.i > 0 && this.j < row - 1){
      if(grid[this.i - 1][this.j].wall == false && grid[this.i][this.j + 1].wall == false)
        this.neighbors.push(grid[this.i - 1][this.j + 1]);
    }
    if(this.i < col - 1 && this.j < row - 1){
      if(grid[this.i][this.j + 1].wall == false && grid[this.i + 1][this.j].wall == false)
        this.neighbors.push(grid[this.i + 1][this.j + 1]);
    }

  }

}
