https://editor.p5js.org/mathisudar2007/full/GMZETh4A6


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220, 0, 220);

  rectMode(CORNER);
  fill(255);
  rect(25, 25, 50, 50); // Draw white rectangle using CORNER mode

  rectMode(CORNERS);
  fill(100);
  rect(25, 25, 50, 50); // Draw gray rectangle using CORNERS mode

  rectMode(RADIUS);
  fill(255);
  rect(200, 50, 30, 30); // Draw white rectangle using RADIUS mode

  rectMode(CENTER);
  fill(100);
  rect(200, 200, 300, 100); // Draw gray rectangle using CENTER mode
  
  
}
