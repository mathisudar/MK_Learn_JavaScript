// 0007_functionClearColorMode
function setup() {
    // Sets the screen to be 800 pixels wide and 400 pixels high
    createCanvas(800, 400);
    background(0);

}
// Clear the screen on mouse press.
function draw() {

    let c1 = colorMode(RGB, 255, 255, 255, 1);
    strokeWeight(1);
    fill('c1');

    ellipse(mouseX, mouseY, 50, 50);

}

function mousePressed() {
    clear();
    background(0);
}

