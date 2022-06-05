// 0004_functionGreenHue
function setup() {
    // Sets the screen to be 800 pixels wide and 400 pixels high
    createCanvas(800, 400);
}
function draw() {

    background(200);
    noFill();
    noStroke();

    let c1 = color(20, 75, 200); // Define color 'c1'
    fill(c1); // Use color variable 'c1' as fill color
    rect(50, 50, 50, 100); // Draw left rectangle

    let greenValue = green(c1); // Get green in 'c1'
    print(greenValue); // Print "75.0"
    fill(0, greenValue, 0); // Use 'greenValue' in new fill
    rect(120, 50, 50, 100); // Draw right rectangle

    noStroke();
    // colorMode(HSB, 255);
    let c2 = color(0, 126, 255);
    fill(c2);
    rect(220, 50, 50, 100);

    let value = hue(c2); // Sets 'value' to "0"
    fill(value);
    rect(290, 50, 50, 100);

}

