// 0016_EllipseMode_NoSmooth
function setup() {
    // Sets the screen to be 800 pixels wide and 400 pixels high
    createCanvas(800, 400);
}
function draw() {

    background('yellow');

    // Example showing RADIUS and CENTER ellipsemode with 2 overlaying 
    //ellipses

    ellipseMode(RADIUS);
    fill(255);
    ellipse(50, 50, 30, 30); // Outer white ellipse
    ellipseMode(CENTER);
    fill(100);
    ellipse(50, 50, 30, 30); // Inner gray ellipse

    // Example showing CORNER and CORNERS ellipseMode with 2 overlaying 
    //ellipses

    ellipseMode(CORNER);
    fill(255);
    ellipse(100, 100, 200, 100); // Outer white ellipse
    ellipseMode(CORNERS);
    fill(100);
    ellipse(150, 150, 250, 250); // Inner gray ellipse

    // noSmooth(); - Draws all geometry with jagged (aliased) edges.

    ellipseMode(RADIUS);
    noStroke();
    smooth();
    ellipse(350, 100, 36, 36);
    noSmooth();
    ellipse(450, 100, 50, 50);


}
