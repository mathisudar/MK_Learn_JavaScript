
https://editor.p5js.org/mathisudar2007/full/9jEYapBZx



function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(220);

  point(130, 20);
  point(185, 20);
  stroke("purple"); // Change the color
  strokeWeight(10); // Make the points 10 pixels in size
  point(185, 75);
  point(130, 75);
  describe("2 points and 2 large purple points in middle-     right of canvas");

  let a = createVector(10, 10);
  point(a);
  let b = createVector(10, 20);
  point(b);
  point(createVector(20, 10));
  point(createVector(20, 20));
  describe(
    "four points create vertices of 10x10 pixel square on      top-left of canvas"
  );

  quad(38, 31, 86, 20, 69, 63, 30, 76);
  describe("irregular white quadrilateral with black       outline");

  // Draw a rectangle at location (300, 200) with a width     and height of 75.
  rect(300, 200, 55, 75);
  describe("white rect with black outline in mid-right     of canvas");

  // Draw a rectangle with rounded corners, each having a   radius of 20.
  rect(200, 200, 55, 75, 20);
  describe(
    "white rect with black outline and round edges in     mid-right of canvas"
  );

  // Draw a rectangle with rounded corners having the         following radii:
  // top-left = 20, top-right = 15, bottom-right = 10,       bottom-left = 5.

  rect(100, 200, 55, 75, 20, 15, 10, 5);
  describe(
    "white rect with black outline and round       edges of different radii"
  );

  // Draw a square at location (30, 20) with a side size of     55.

  square(100, 100, 55);
  describe("white square with black outline in mid-right   of canvas");

  // Draw a square with rounded corners, each having a       radius of 20.
  square(200, 100, 55, 20);
  describe(
    "white square with black outline and round edges in     mid-right of canvas"
  );

  // Draw a square with rounded corners having the         following radii:
  // top-left = 20, top-right = 15, bottom-right = 10,       bottom-left = 5.
  square(300, 100, 55, 20, 15, 10, 5);
  describe(
    "white square with black outline and round     edges of different radii"
  );

  /* triangle(x1, y1, x2, y2, x3, y3) */

  triangle(100, 350, 200, 350, 150, 300);
  describe("white triangle with black outline in mid-      right of canvas");
}
