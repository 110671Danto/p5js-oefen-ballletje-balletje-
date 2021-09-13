
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

    if (this.x <= 20 || this.x >= 480) {
      this.vx = this.vx * -1;
    }
    if (this.y <= 24 || this.y >= 380) {
      this.vy = this.vy * -1;
    }
  }
}


function setup(){
  createCanvas(500, 400);
  ball1 = new Ball(50,50,40,40,5,5,);
  ball2 = new Ball(200,20,30,30,5,5);
  ball3 = new Ball(300,300,50,50,5,5);
}

function draw() {
	background(225);
  ball1.drawBall();
  ball2.drawBall();
  ball3.drawBall()
}


