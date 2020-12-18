// 0009_functionErase01

function setup() {
    // Sets the screen to be 800 pixels wide and 400 pixels high
    createCanvas(800, 400);
}

function draw() {

    background(100, 100, 250);
    fill(250, 100, 100);
    rect(400, 200, 50, 50);

    erase();
    ellipse(400, 200, 30);
    noErase();

    fill(100, 100, 250);
    rect(20, 20, 60, 60);

    strokeWeight(5);
    erase(150, 255);
    triangle(50, 10, 70, 50, 90, 10);
    noErase();


    fill(100, 100, 250);
    rect(120, 20, 60, 60);

    strokeWeight(5);
    erase();
    triangle(150, 10, 170, 50, 190, 10);
    noErase();


}