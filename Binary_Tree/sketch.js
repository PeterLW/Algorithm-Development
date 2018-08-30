
var tree;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(150);
	// noCanvas();

	tree = new BinaryTree();
	for(let i = 0; i < 10; i++)
		tree.addNode(parseInt(random(100), 10));

	// console.log(tree);
	tree.traverse();
	// tree.search(9)

}

function draw() {

}
