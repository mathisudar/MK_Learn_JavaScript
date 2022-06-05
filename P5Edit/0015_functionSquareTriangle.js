// 0014_Square_Triangle
function setup() {
    // Sets the screen to be 800 pixels wide and 400 pixels high
    createCanvas(800, 400);
}
function draw() {

    background('yellow');

    // Draw a square at location (100, 20) with a side size of 55.
    square(100, 20, 55);

    // Draw a square with rounded corners, each having a radius of 20.
    square(200, 20, 55, 20);

    // Draw a square with rounded corners having the following radii:
    // top-left = 20, top-right = 15, bottom-right = 10, bottom-left = 5.
    square(300, 20, 55, 20, 15, 10, 5);


    triangle(430, 75, 458, 20, 486, 75);

}
