// 0014_Quad_Rect
function setup() {
    // Sets the screen to be 800 pixels wide and 400 pixels high
    createCanvas(800, 400);
}
function draw() {

    background('yellow');
    quad(38, 31, 86, 20, 69, 63, 30, 76);

    // Draw a rectangle at location (100, 20) with a width and height of 55.
    rect(100, 20, 55, 55);

    // Draw a rectangle with rounded corners, each having a radius of 20.
    rect(200, 20, 55, 55, 20);

    // Draw a rectangle with rounded corners having the following radii:
    // top-left = 20, top-right = 15, bottom-right = 10, bottom-left = 5.
    rect(300, 20, 55, 55, 20, 15, 10, 5);

}
