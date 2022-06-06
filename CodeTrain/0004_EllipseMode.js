https://editor.p5js.org/mathisudar2007/full/jU1ry9Ft4


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Example showing RADIUS and CENTER ellipsemode with 2 overlaying ellipses
  ellipseMode(RADIUS);
  fill(255);
  ellipse(50, 50, 30, 30); // Outer white ellipse
  ellipseMode(CENTER);
  fill(100);
  ellipse(50, 50, 30, 30); // Inner gray ellipse

  // Example showing CORNER and CORNERS ellipseMode with 2 overlaying ellipses
  ellipseMode(CORNER);
  fill(255);
  ellipse(100, 100, 50, 50); // Outer white ellipse
  ellipseMode(CORNERS);
  fill(100);
  ellipse(100, 50, 150, 100); // Inner gray ellipse
}
