var x, y, v, h;

function setup() {
	createCanvas(500, 400);

  x = 50;
  y = 50;
  v = 6;
  h = 2;
}

function draw() {
	background(225);
  
  ellipse(x,y,50,50);
  x = x + v;
  y = y + h;



  if(x <= 20 || x >= 480) {
    v = v * -1;
  }
  if(y <= 20 || y >= 380) {
    h = h * -1;
  }
}
