// 0019_BezierCurveBezierDetail

function setup() {
    // Sets the screen to be 800 pixels wide and 400 pixels high
    createCanvas(800, 400, WEBGL);
}
function draw() {

    background('yellow');
    strokeWeight(5);

    noFill();
    stroke(255, 102, 0);
    line(85, 20, 10, 10);
    line(90, 90, 15, 80);

    stroke(0, 0, 0);
    bezierDetail(3);
    bezier(85, 20, 10, 10, 90, 90, 15, 80);
    // commonly used in computer graphics to define gently sloping curves.
    // Sets the resolution at which Bezier's curve is displayed. The default value is 20.

    stroke(255);
    bezierDetail(10);
    bezier(350, 350, 0, 250, 250, 0, 150, 0, 0, 0, 100, 0);

    bezierDetail(20);
    bezier(-40, -40, 0,
        90, -40, 0,
        -90, 40, 0,
        40, 40, 0);

}
