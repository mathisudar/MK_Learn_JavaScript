// 0011_Arc
function setup() {
    // Sets the screen to be 800 pixels wide and 400 pixels high


    createCanvas(800, 400);
}
function draw() {

    background(255);

    //arc(xPosition,yPosition,width,height,startAngle,endAngle);
    fill('black');
    arc(50, 55, 50, 50, 0, HALF_PI); // PI = 180 deg

    noFill();
    arc(50, 55, 60, 60, HALF_PI, PI);
    arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
    arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);

}

