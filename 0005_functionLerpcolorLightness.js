// 0005_functionLerpcolorLightness
function setup() {
    // Sets the screen to be 800 pixels wide and 400 pixels high
    createCanvas(800, 400);
}
function draw() {

    colorMode(RGB);
    stroke(255);
    background(51);

    let from = color(218, 165, 32);
    let to = color(72, 61, 139);

    colorMode(RGB); // Try changing to HSB.
    let interA = lerpColor(from, to, 0.33);
    let interB = lerpColor(from, to, 0.66);

    fill(from);
    rect(50, 50, 20, 60);

    fill(interA);
    rect(70, 50, 20, 60);

    fill(interB);
    rect(90, 50, 20, 60);

    fill(to);
    rect(110, 50, 20, 60);

    noStroke();
    colorMode(HSL);
    let c = color(156, 100, 50, 1);
    fill(c);
    rect(150, 50, 20, 60);

    let value = lightness(c); // Sets 'value' to 50
    fill(value);
    rect(185, 50, 20, 60);


}
