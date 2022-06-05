function setup() {
    // Sets the screen to be 800 pixels wide and 400 pixels high
    createCanvas(800, 400);
}
function draw() {

    background('yellow');

    // Draw a circle at location (100, 100) with a diameter of 80.
    erase();
    noErase();
    fill('red');
    strokeWeight(3);
    circle(100, 100, 80);

    erase();
    noErase();
    fill('green');
    strokeWeight(8);
    circle(100, 100, 50);

    erase();
    noErase();
    fill('red');
    strokeWeight(3);
    // ellipse(xPos,yPos,width,height)
    ellipse(200, 100, 50, 50);

    erase();
    // ellipse(xPos,yPos,width,height)
    ellipse(300, 100, 80, 30);

}
