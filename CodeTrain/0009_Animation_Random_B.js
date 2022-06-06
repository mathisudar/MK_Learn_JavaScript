https://editor.p5js.org/mathisudar2007/full/Mw2zJwdgv


let x,y,r,g,b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  
  r = random(255);
  g = random(255);
  b = random(255);
  x= random(width);
  y = random(height);
  
  fill(r,g,b,100);
  noStroke();
  
  circle(x,y,30);
  
}

function mousePressed(){
  background(255,255,255);
}
