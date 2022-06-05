// 0001_functionAlpha
// alpha();blue() - color functions

function setup() {
    // Sets the screen to be 800 pixels wide and 400 pixels high
    createCanvas(800, 400);
}
function draw() {
    // Set the background to black and turn off the fill color
    background(0);
    noFill();
    noStroke();

    let c = color(0, 126, 255, 102);
    fill(c); // filled rectangle
    rect(20, 20, 400, 360);

    let value = alpha(c); // Relative 'value' of color - 102
    fill(value);
    rect(400, 20, 380, 360);


    let blueValue = blue(c);
    fill(0, 0, blueValue);
    rect(440, 40, 80, 40);
}
