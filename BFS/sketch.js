
var data;
var graph;
var path = [];

function preload(){
	data = loadJSON('bacon.json');
	// console.log(data)
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(150);

	graph = new Graph();

	for(let i = 0; i < data.movies.length; i++){
		var movie = data.movies[i].title;
		var cast = data.movies[i].cast;

		//movies as nodes in the graph
		var movie_node = new Node(movie);
		graph.addNode(movie_node);

		//actors as nodes in the graph and connected to corresponding movies
		//ie, a movie node need to go through a actor to reach another movie node
		//ie, these 2 movies share the same actor
		for(let j = 0; j < cast.length; j++){

			var actor_node = graph.getNode(cast[j]);
			if(actor_node == undefined){
				actor_node = new Node(cast[j]);
			}
			// console.log(actor_node.value);
			graph.addNode(actor_node);
			movie_node.addEdge(actor_node);
		}
	}

	graph.start = graph.getNode("Rachel McAdams");
	graph.end  = graph.getNode("Kevin Bacon");

	var result_node = BFS();

	//reverse path finding
	if(result_node == null){
		console.log("Not found");
	}
	else{
		console.log("Found");
		while(result_node.value !== graph.start.value){
			path.push(result_node.value);
			result_node = result_node.parent;
		}
		path.push(result_node.value);
	}

	console.log(path);

}

function BFS(){
	//BFS algorithm, O(Vertices + Edges),
	//Dijkstra is DFS with priority queue, ie, the queue will be order by the accumulated weight of edges
	var queue = [];
	var start_node = graph.start;
	var end_node = graph.end;

	start_node.visited = true;
	queue.push(start_node);

	while(queue.length > 0){
		var current_node = queue.shift();
		if(current_node.value == end_node.value){
			return current_node;
		}
		for(let i = 0; i < current_node.edges.length; i++){
			if(current_node.edges[i].visited == false){
				current_node.edges[i].visited = true;
				current_node.edges[i].parent = current_node;
				queue.push(current_node.edges[i]);
			}
		}
	}
	return null;
}

function draw() {

}
