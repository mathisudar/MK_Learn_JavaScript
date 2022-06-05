//0010_functionNoErase
function setup() {
    // Sets the screen to be 100 pixels wide and 100 pixels high
    createCanvas(100, 100);

}

function draw() {

    background(235, 145, 15);
    noStroke();
    fill(30, 45, 220);
    rect(30, 10, 10, 80);

    erase();
    ellipse(50, 50, 60);

    noErase();
    rect(70, 10, 10, 80);

}

