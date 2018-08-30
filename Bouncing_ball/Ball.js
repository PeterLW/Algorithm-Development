
class Ball {

	constructor(x, y, xspeed, yspeed, radius) {
		this.x = x;
		this.y = y;
		this.xspeed = xspeed;
		this.yspeed = yspeed;
    this.radius = radius;
	}

  move(){
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
	}

  bounce(){
		if(this.x >= windowWidth - this.radius || this.x <= this.radius){
			this.xspeed = this.xspeed * -1;
		}

		if(this.y >= windowHeight - this.radius || this.y <= this.radius){
			this.yspeed = this.yspeed * -1;
		}

		// if(ball.y <= 50){
		// 		ball.yspeed = ball.yspeed * -1;
		// }else if(ball.y >= windowHeight - 60 && ball.y <= windowHeight - 50){
		// 	console.log("touch");
		// 	if(ball.x <= mouseX + 150 && ball.x >= mouseX - 50){
		// 		ball.yspeed = ball.yspeed * -1;
		// 	}
		// }else if(ball.y >= windowHeight + 50){
		// 	console.log("fail");
		// 	success = false;
		// }else{}
	}
}
