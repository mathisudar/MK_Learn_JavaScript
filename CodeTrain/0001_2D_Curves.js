
https://editor.p5js.org/mathisudar2007/full/rn6_ht1_H


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220, 0, 200);

  /* arc(x, y, w, h, start, stop, [mode], [detail]) */

  arc(300, 50, 80, 80, 0, PI + QUARTER_PI);
  describe("white ellipse with top right quarter missing");

  arc(200, 50, 80, 80, 0, PI + QUARTER_PI, OPEN);
  describe("white ellipse with black outline with top right   missing");

  arc(200, 300, 80, 80, 0, PI + QUARTER_PI, CHORD);
  describe("white open arc with black outline with top right   missing");

  arc(100, 150, 80, 80, 0, PI + QUARTER_PI, PIE);
  describe(
    "white ellipse with top right quarter missing with black     outline around the shape"
  );

  /* ellipse(x, y, w, h, [detail]) */

  ellipse(200, 150, 80, 65);
  describe("white ellipse with black outline in middle of a   gray canvas");

  /* circle(x, y, d) */

  circle(300, 150, 80);
  describe("white circle with black outline in mid of gray   canvas");

  /* line(x1, y1, z1, x2, y2, z2) */

  line(100, 300, 0, 150);
  describe(
    "a 78 pixels long line running from mid-top to bottom-right     of canvas"
  );

  line(30, 20, 85, 20);
  stroke(126);
  line(85, 20, 85, 75);
  stroke(255);
  line(85, 75, 30, 75);
  describe(
    "3 lines of various stroke sizes. Form top, bottom and right   sides of a square"
  );
}


