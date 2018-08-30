var balls = [];
var cat;

function preload(){
	cat = loadImage('cat.png');
}

function setup() {//only execute once
	createCanvas(windowWidth, windowHeight);//the size of your whole webpage
	background(150,150,150);//red, green, blue
}

function draw() {//keep running until user close the broswer

	image(cat, 0, 0, windowWidth, windowHeight);

	if(balls.length != 0){
		noStroke();
		// fill(255,200,100);
		// rect(mouseX, windowHeight - 10, bar.width, bar.thick);
		for(let ball of balls){

			if(distance(mouseX, mouseY, ball.x, ball.y) <= ball.radius){
				fill(255,200,200/*, 1000*/);//fourth parameter is transparent
				ellipse(ball.x, ball.y,ball.radius,ball.radius);//position of ellipse follow the position of mouse
			}else{
				fill(255,200,100);
				ellipse(ball.x, ball.y,ball.radius,ball.radius);
			}

			ball.bounce();
			ball.move();
		}

	}

}


function mousePressed(){//event function in js

	let selected = false;

	//use i--, bc after delete ball[i] , the array get shifted leftward, the index of elements after ball[i] will be minused 1,
	//so one element will be skipped if we checked elements from left to right. If we checked inversely, problem solved.
	for(let i = balls.length - 1; i >= 0; i--){
		if(distance(mouseX, mouseY, balls[i].x, balls[i].y) <= balls[i].radius){
			balls.splice(i, 1);
			selected = true;
		}
	}

  if(selected == false){
		let radius = Math.random()*(100-20) + 20;
		balls.push(new Ball(mouseX, mouseY, direction(), direction(), radius));
	}
}

function distance(x1,y1,x2,y2){
	return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function direction(){
	let dir = Math.floor(Math.random()*2) == 1 ? 1 : -1;
	let slope = Math.random()*(10-2) + 2;
	return dir * slope;
}
