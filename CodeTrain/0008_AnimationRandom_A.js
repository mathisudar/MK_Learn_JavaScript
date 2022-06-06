https://editor.p5js.org/mathisudar2007/full/A_jDuca2q


let lineWidth;
let recXsize;

function setup() {
  createCanvas(400, 400);
  background(0);
  
}

function draw() {
  
  
  lineWidth = random(3,10);
  recXsize = random(100,200);
  
  fill(0,255,0);
  stroke(0,0,255);
  strokeWeight(lineWidth);
  rectMode(CENTER);
  rect(200,200,recXsize);
  
}
