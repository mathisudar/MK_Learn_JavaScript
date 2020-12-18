// 0003_functionColor
function setup() {
    // Sets the screen to be 800 pixels wide and 400 pixels high
    createCanvas(800, 400);
}
function draw() {
   
    background(200);
    noFill();
    noStroke();

    let c1 = color(255, 204, 0);
    fill(c1);
    noStroke();
    rect(30, 20, 55, 55);


    let c2 = color(255, 204, 0);
    fill(c2);
    noStroke();
    ellipse(150, 50, 80, 80); // Draw left circle


    // Using only one value generates a grayscale value.
    c2 = color(65);
    fill(c2);
    ellipse(250, 50, 80, 80);


    let c3 = color('magenta');
    fill(c3);
    noStroke();
    rect(300, 20, 60, 60);


    // RGB and RGBA color strings are also supported
    // these all set to the same color (solid blue)
    let c4;
    noStroke();

    c4 = color('rgb(0,0,255)');
    fill(c4);
    rect(410, 10, 35, 35); // Draw rectangle

    c4 = color('rgb(0%, 0%, 100%)');
    fill(c4);
    rect(455, 10, 35, 35); // Draw rectangle

    c4 = color('rgba(0, 0, 255, 1)');
    fill(c4);
    rect(410, 55, 35, 35); // Draw rectangle

    c4 = color('rgba(0%, 0%, 100%, 1)');
    fill(c4);
    rect(455, 55, 35, 35); // Draw rectangle

    // HSL color can also be specified by value
    let c5 = color('hsl(160, 100%, 50%)');
    noStroke();
    fill(c5);
    rect(30, 150, 50, 80); // Draw rectangle

    c5 = color('hsla(160, 100%, 50%, 0.5)');
    fill(c5);
    rect(90, 150, 50, 80); // Draw rectangle


    // HSB color can also be specified
    let c6 = color('hsb(160, 100%, 50%)');
    noStroke();
    fill(c6);
    rect(210, 150, 50, 80); // Draw rectangle

    c6 = color('hsba(160, 100%, 50%, 0.5)');
    fill(c6);
    rect(270, 150, 50, 80); // Draw rectangle


}
