// 0002_function_Brightness

function setup() {
    // Sets the screen to be 800 pixels wide and 400 pixels high
    createCanvas(800, 400);
}
function draw() {
    // Set the background to black and turn off the fill color
    background(0);
    noFill();
    noStroke();

    colorMode(HSB, 255);

    let color1 = color(0, 126, 255);
    fill(color1);
    rect(15, 20, 35, 360);

    let value = brightness(color1); // Sets 'value' to 255
    fill(value);
    rect(50, 20, 35, 360);

    //Hue/Saturation/Brightness
    let color2 = color('hsb(60, 100%, 50%)');
    fill(color2);
    rect(100, 20, 35, 360);

    let value2 = brightness(color2); // A 'value' of 50% is 127.5
    fill(value2);
    rect(135, 20, 35, 360);

}