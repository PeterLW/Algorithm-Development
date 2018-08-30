class Particle{

  constructor(x, y){
    this.target = createVector(x, y);

    this.position = createVector(random(windowWidth), random(windowHeight));
    // this.position = createVector(x, y);
    // this.velocity = p5.Vector.random2D();//createVector();
    this.velocity = createVector();
    this.acceleration = createVector();
    this.maxspeed = 10;
    this.maxforce = 0.5;
  }

  init_pos(){
    this.position = createVector(random(windowWidth), random(windowHeight));
  }

  update(){
    this.position = p5.Vector.add(this.position,this.velocity);
    this.velocity = p5.Vector.add(this.velocity,this.acceleration);
    this.acceleration = p5.Vector.mult(this.acceleration, 0);
  }

  show(){//without class encapsulation, need to use prototype
    stroke(255);
    strokeWeight(15);
    point(this.position.x, this.position.y);
  }

  behavior(){
    var steering_force = this.steering(this.target);
    this.applyForce(steering_force);

    var mouse = createVector(mouseX, mouseY);
    var flee = this.flee(mouse);
    this.applyForce(flee.mult(20));
  }


  steering(target){
    var desired = p5.Vector.sub(target, this.position);
    var distance = desired.mag();
    var speed = this.maxspeed;
    if(distance < 100){
      speed = map(distance, 0, 100, 0, this.maxspeed);
    }
    desired.setMag(speed);
    var steering_force = p5.Vector.sub(desired,this.velocity);
    // console.log(steering_force.mag());
    steering_force.limit(this.maxforce);
    return  steering_force;
  }

  flee(target){
    var desired = p5.Vector.sub(target, this.position);
    var distance = desired.mag();

    if(distance < 50){
      var speed = map(distance, 0, 50, 0, this.maxspeed);
      // console.log(speed)
      desired.setMag(speed);
      desired = p5.Vector.mult(desired, -1);

      var flee = p5.Vector.sub(desired, this.velocity);
      flee.limit(this.maxforce);
    }
    else{
      flee = createVector(0, 0);
    }
    // console.log(steering_force.mag());
    return  flee;
  }

  applyForce(f){// F=ma, m =1
    this.acceleration.add(f)
  }
}
