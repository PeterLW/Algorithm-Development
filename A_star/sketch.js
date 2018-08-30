
function removeFromArray(arr, element){
	for(let i = arr.length - 1; i >= 0; i--){
		if(arr[i] == element)
			arr.splice(i, 1);
	}
}

var row = 100;
var col = 100;
var grid = new Array(col);
var grid_width;
var grid_height;

var closedSet = [];
var openSet = [];
var start;
var end;
var done = false;
var fail = false;
var path = [];

function setup() {
	createCanvas(900, 900);

	grid_width = width / col;
	grid_height = height / row;

	for(let i = 0; i < grid.length; i++){
		grid[i] = new Array(row);
	}

	for(let i = 0; i < grid.length; i++){
		for(let j = 0; j < grid[i].length; j++){
			grid[i][j] = new Spot(i, j, i * grid_width, j * grid_height);
		}
	}

	for(let i = 0; i < grid.length; i++){
		for(let j = 0; j < grid[i].length; j++){
			grid[i][j].addNeighbors(grid, col, row);
		}
	}

	// console.log(grid)

	start = grid[0][0];
	end = grid[col - 1][row - 1];
	start.wall = false;
	end.wall = false;
	openSet.push(start);

}

function draw() {

	background(255);

	if(openSet.length > 0 && !done){

		//find the index of node with smallest f, f = g + h
		//g = cost from start node to current_node, h = heuristic
		var winner = 0;
		for(let i = 0; i < openSet.length; i++){
			if(openSet[i].f < openSet[winner].f){
				winner = i;
			}
		}

		var current_node = openSet[winner];

		if(current_node == end){
			done = true;
			temp = current_node;

			//store the path
			while(temp != start){
				path.push(temp);
				temp = temp.previous;
			}
			path.push(temp);

			// console.log(path);
			console.log("Done!");

		}

		//after get the smallest cost node from
		removeFromArray(openSet, current_node);
		closedSet.push(current_node);

		var neighbors = current_node.neighbors;
		for(let i = 0; i < neighbors.length; i++){

			//each time, a node remove from openSet/put into closedSet is the node
			//with lowest f = cost from the start to the node + heuristic, ie optimal path
			//from the start to the end. So if current node's neighbor is in the closedSet,
			//means we already found the optimal path that contains the neighbor, ie,
			//the path go through current_node and the neighbor is not optimal, so ingore
			if(!closedSet.includes(neighbors[i]) && neighbors[i].wall == false){
				var temp_g = current_node.g + 1;

				//not in closedSet = not found the optimal path that go through the neighbor,
				//ie, the optimal path found currently doesn't contain the neighbor
				//if the neighbor is in openSet, means the neighbor is a neighbor of another node,
				//so we need check which path has smaller g


				if(openSet.includes(neighbors[i])){
					if(temp_g < neighbors[i].g){
						neighbors[i].g = temp_g;
						neighbors[i].previous = current_node;
					}
				}
				else{
					neighbors[i].g = temp_g;
					openSet.push(neighbors[i]);
					neighbors[i].previous = current_node;
				}

				neighbors[i].h = heuristic(neighbors[i], end);
				neighbors[i].f = neighbors[i].g + neighbors[i].h;

			}
		}


	}
	else{
		if(fail == false){
			console.log("no solution");
			fail = true;
		}
	}

	//drawing**************************************************************************
	noStroke();
	for(let i = 0; i < grid.length; i++){
		for(let j = 0; j < grid[i].length; j++){
			grid[i][j].show(grid_width , grid_height , color(255));
		}
	}

	if(!done){
		for(let i = 0; i < closedSet.length; i ++){
			closedSet[i].show(grid_width , grid_height , color(255, 0, 0))
		}

		for(let i = 0; i < openSet.length; i ++){
			openSet[i].show(grid_width , grid_height , color(0, 255, 0))
		}
	}
	else{
		start.show(grid_width , grid_height , color(255, 0, 0));
		end.show(grid_width , grid_height , color(0, 255, 0));
		noFill();
		stroke(0, 0, 255);
		strokeWeight(grid_width/2)
		beginShape();
		for(let i = 0; i < path.length; i++){
			// path[i].show(grid_width - 1, grid_height - 1, color(0, 0, 255));
			vertex(path[i].x + grid_width/2, path[i].y + grid_height/2);
		}
		endShape();
	}
	//******************************************************************************************

}

function heuristic(a, b){
	return dist(a.x, a.y, b.x, b.y);
}
