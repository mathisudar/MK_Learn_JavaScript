
https://editor.p5js.org/mathisudar2007/full/6W6kTM9Zz

let r, g, b;

function setup() {
  createCanvas(400, 400);
  background(0);
  fill(0,255,0);
  
}

function draw() {
  r = random(255);
  g = random(255);
  b = random(255);

  noStroke();
  
  circle(mouseX, mouseY, 50);
}

function mousePressed() {
  
 //background(0);
 fill(r,g,b);
  
}



