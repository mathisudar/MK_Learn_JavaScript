// 0017_Rectmode
function setup() {
    // Sets the screen to be 800 pixels wide and 400 pixels high
    createCanvas(800, 400);
}
function draw() {

    background('yellow');

    rectMode(CORNER);
    fill(255);
    rect(25, 25, 50, 50); // Draw white rectangle using CORNER mode

    rectMode(CORNERS);
    fill(100);
    rect(25, 25, 50, 50); // Draw gray rectanle using CORNERS mode

    rectMode(RADIUS);
    fill(255);
    rect(150, 150, 30, 60); // Draw white rectangle using RADIUS mode

    rectMode(CENTER);
    fill(100);
    rect(150, 150, 40, 20); // Draw gray rectangle using CENTER mode

}
