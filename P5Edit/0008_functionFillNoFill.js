//0008_functionFillNoFill
function setup() {
    // Sets the screen to be 800 pixels wide and 400 pixels high
    createCanvas(800, 400, WEBGL);
}
function draw() {

    let box1;
    let box2;

    noFill();
    background(0);
    stroke(100, 100, 240); // Color of the line
    strokeWeight(3); // Thickness of the line

    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);

    box1 = box(100, 100, 50);
    box2 = box(50, 50, 20);
}

