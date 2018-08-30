var font;
var Text = [];
var Text_1 = [];
var Text_2 = [];
var switching = 1;

function preload(){
	font = loadFont('MontserratAlternates-Bold.otf')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	// createCanvas(800, 300);
	background(150,150,150);

	var points1 = font.textToPoints('Computer', 200, 250, 300)
	var points2 = font.textToPoints('Engineer', 200, 700, 300)
	var points3 = font.textToPoints('Electrical', 200, 250, 300)
  // console.log(points);
	for(let i = 0; i< points1.length + points2.length; i++){
		if(i < points1.length)
			Text_1.push(new Particle(points1[i].x, points1[i].y));
		else
			Text_1.push(new Particle(points2[i - points1.length].x, points2[i - points1.length].y));
	}

	for(let i = 0; i< points3.length + points2.length; i++){
		if(i < points3.length)
			Text_2.push(new Particle(points3[i].x, points3[i].y));
		else
			Text_2.push(new Particle(points2[i - points3.length].x, points2[i - points3.length].y));
	}
}



function draw() {
	background(150,150,150);
	for(let i = 0; i < Text.length; i++){
		Text[i].behavior();
		Text[i].update();
		Text[i].show();
	}
}

function mousePressed(){

	if(switching == 1){
		Text = Text_1;
		switching = 0;
	}
	else{
		Text = Text_2;
		switching = 1;
	}

	for(let i = 0; i < Text.length; i++)
		Text[i].init_pos();

}
