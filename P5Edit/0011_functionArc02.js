// 0011_Arc
function setup() {
    // Sets the screen to be 800 pixels wide and 400 pixels high
    createCanvas(800, 400);
}
function draw() {

    background(255);

    strokeWeight(1);
    fill('black');
    //arc(xPosition,yPosition,width,height,startAngle,endAngle);
    arc(50, 50, 80, 80, 0, PI + QUARTER_PI);

    strokeWeight(3);
    fill('blue');
    arc(250, 50, 80, 80, 0, PI + QUARTER_PI, OPEN);

    strokeWeight(5);
    fill('red');
    arc(450, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);
    // fill('green');
    strokeWeight(7);
    noFill();
    arc(650, 50, 80, 80, 0, PI + QUARTER_PI, PIE);
}

