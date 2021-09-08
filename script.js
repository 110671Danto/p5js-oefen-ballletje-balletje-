
class Ball {
  constructor(x, y, w, h, vx, vy) {
    this.x = x; 
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = vx;
    this.vy = vy;
  }

  drawBall() {
    ellipse(this.x, this.y, this.w, this.h, this.vx, this.vy);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    if (this.x <= 20 || this.x >= 300) {
      vx = vx * -1;
    }
    if (this.x <= 20 || this.y >= 300) {
      vy = vy * -1;
    }
      


    }

    
    

  }


} 

function setup(){
  createCanvas(500, 400);
  ball1 = new Ball(10,10,30,30,5,5);
  ball2 = new Ball(100,200,30,30,5,5);
}

function draw() {
	background(225);
  ball1.drawBall();
  ball2.drawBall();
}


