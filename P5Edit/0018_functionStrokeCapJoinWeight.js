// 0018_StrokeCapJoinWeight

function setup() {
    // Sets the screen to be 800 pixels wide and 400 pixels high
    createCanvas(800, 400);
}
function draw() {

    background('yellow');

    // Example of different strokeCaps
    strokeWeight(12.0);
    strokeCap(ROUND);
    line(20, 30, 80, 30);

    strokeCap(SQUARE);
    line(20, 50, 80, 50);

    strokeCap(PROJECT);
    line(20, 70, 80, 70);

    // Example of MITER type of joints
    noFill();
    strokeWeight(10.0);
    strokeJoin(MITER);
    beginShape();
    vertex(135, 20);
    vertex(165, 50);
    vertex(135, 80);
    endShape();

    // Example of BEVEL type of joints
    noFill();
    strokeWeight(10.0);
    strokeJoin(BEVEL);
    beginShape();
    vertex(135, 120);
    vertex(165, 150);
    vertex(135, 180);
    endShape();

    // Example of ROUND type of joints
    noFill();
    strokeWeight(10.0);
    strokeJoin(ROUND);
    beginShape();
    vertex(235, 220);
    vertex(265, 250);
    vertex(235, 280);
    endShape();


    // Example of different stroke weights
    strokeWeight(1); // Default
    line(320, 20, 380, 20);
    strokeWeight(4); // Thicker
    line(320, 40, 380, 40);
    strokeWeight(10); // Beastly
    line(320, 70, 380, 70);


}
