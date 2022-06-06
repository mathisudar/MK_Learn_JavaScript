https://editor.p5js.org/mathisudar2007/full/n4ieObVQZh

let circleX = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  fill(255);
  circle(circleX,200,40);
  
  circleX = circleX+5;
  
}

function mousePressed(){
  circleX = 0;
}
