//0006_functionRedSaturation
function setup() {
    // Sets the screen to be 800 pixels wide and 400 pixels high
    createCanvas(800, 400);
}
function draw() {

    background(200);
    noFill();
    noStroke();

    let c = color(255, 204, 0); // Define color 'c'
    fill(c); // Use color variable 'c' as fill color
    rect(15, 20, 35, 60); // Draw left rectangle

    let redValue = red(c); // Get red in 'c'
    print(redValue); // Print "255.0"
    fill(redValue, 0, 0); // Use 'redValue' in new fill
    rect(50, 20, 35, 60); // Draw right rectangle


    noStroke();
    // colorMode(HSB, 255);
    let c2 = color(0, 126, 255);
    fill(c2);
    rect(100, 20, 35, 60);

    let value = saturation(c2); // Sets 'value' to 126
    fill(value);
    rect(150, 20, 35, 60);

}
